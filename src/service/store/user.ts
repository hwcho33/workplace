// dependencies
import dayjs from 'dayjs'

// utils
import { httpRequest } from '@/utils/request'
import { generateStorage } from '@/utils/storage'

// modules
import { CONTENT_TYPE } from '@/enums/http'
import type { Storage } from '@/utils/storage'
import { FormContext } from 'vee-validate'

import type { SelfCertCertNumCheckResponse } from '~/api/types/customer'
import type { JoinFormUser } from '~/pages/customer/type'

const request = httpRequest({
  headers: { 'Content-Type': CONTENT_TYPE.FORM_URLENCODED }
})

type User = {
  name: string
  email: string
  avatar: string
  phone: string
  status: string
}

interface UserState {
  token: string
  user: User
  isAuthenticated: boolean
  expiredTime: string
  hasLogout: Storage
}

function dayMapper(day?: number) {
  const format_ = 'YYYY-MM-DD'
  return !!day ? dayjs().add(day, 'day').format(format_) : dayjs().format(format_)
}

const storage = generateStorage()

export const LOGOUT_STATUS_KEY = 'ns:LOGOUT_STATUS'
export enum HAS_LOGOUT {
  YES = 'yes',
  NO = 'no'
}

export const useUserStore = defineStore('userStore', {
  state: (): UserState => {
    return {
      token: '',
      user: {} as User,
      isAuthenticated: false,
      expiredTime: dayMapper(),
      hasLogout: storage
    }
  },
  actions: {
    setToken(token: string, expiredTime: number) {
      this.token = token
      this.expiredTime = dayMapper(expiredTime)
      this.isAuthenticated = true
    },
    setUser(payload: User) {
      this.user = payload
    },
    logout(): void {
      this.hasLogout.set(LOGOUT_STATUS_KEY, HAS_LOGOUT.YES)
      this.token = ''
      this.isAuthenticated = false
    },
    async login(payload: any) {
      try {
        await request
          .post({
            url: '/test***/token',
            data: payload
          })
          .then(res => {
            console.info(res)
            this.hasLogout.set(LOGOUT_STATUS_KEY, HAS_LOGOUT.NO)
            this.setToken(res.data.token, res.data.expiredTime)
            this.setUser(res.data.user)
          })
      } catch (err) {
        console.error(err)
      }
    },
    async reIsuue() {
      try {
        await request
          .post({
            url: '/test***/token'
          })
          .then(res => {
            console.info('response =>', res)
            this.setToken(res.data.token, res.data.expiredTime)
            this.setUser(res.data.user)
          })
      } catch (err) {
        console.error(err)
      }
    }
  },
  getters: {
    getToken(): string {
      return this.token
    },
    hasAuthenticated(): boolean {
      return this.isAuthenticated
    },
    getUser(): User {
      return this.user
    },
    getExpiredTime(): string {
      return this.expiredTime
    }
  }
})

const initJoinUser = {
  userJoinState: {} as JoinFormUser,
  userJoinValidForm: {} as Record<string, any>,
  selfCertNumCheck: {} as SelfCertCertNumCheckResponse
}

export const useJoinUserStore = defineStore('joinUserStore', {
  state: () => initJoinUser,
  getters: {
    getJoinUser: state => state
  },
  actions: {
    setJoinUser(payload: Record<string, any>) {
      this.userJoinValidForm = payload.userJoinValidForm
      this.userJoinState = payload.userJoinState
    },
    setSelfCertNumCheck(payload: SelfCertCertNumCheckResponse) {
      this.selfCertNumCheck = payload
    },
    setInit() {
      this.userJoinState = initJoinUser.userJoinState
      this.userJoinValidForm = initJoinUser.userJoinValidForm
      this.selfCertNumCheck = initJoinUser.selfCertNumCheck
    }
  }
})
