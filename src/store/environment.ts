import { Api } from '~utils/api'

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
  api: Api

  constructor() {
    this.api = new Api()
  }

  setup() {
    this.api.setup()
  }
}
