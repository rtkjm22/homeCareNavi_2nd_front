import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './_id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/manager/staff'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * スタッフを削除する
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * スタッフを削除する
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        /**
         * スタッフを更新する
         */
        patch: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).send(),
        /**
         * スタッフを更新する
         */
        $patch: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
