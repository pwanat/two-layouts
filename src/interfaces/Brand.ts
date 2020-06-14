export interface Brand {
  id: number,
  name: string,
  themeName: string,
  route: string,
  switchDirection: string,
  username: string,
  loginError: Error | string,
}
