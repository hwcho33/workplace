/**
 * @description 콘솔에 메시지 노출
 */
export function showMode(message: string, type: string, condition: boolean): void {
  if (condition) {
    const inlineStyle = `background: #fff; color: ${type}; font-size: 32px; border: 1px solid ${type};`
    console.info(message, inlineStyle)
  }
}
