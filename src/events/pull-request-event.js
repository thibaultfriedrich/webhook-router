import RepositoryEvent from './repository-event'

export default class PullRequestEvent extends RepositoryEvent {
  // constructor (appName, repository, branchSource, branchDestination, title, description = '') {
  constructor ({ appName = '', repositoryUrl = '', branchSource = '', branchDestination = '', title = '', description = '' }) {
    super('pull-request', appName, repositoryUrl)
    this.branchSource = branchSource
    this.branchDestination = branchDestination
    this.description = description
    this.title = title
  }

  toJson () {
    return {
      ...super.toJson(),
      title: this.title,
      branchSource: this.branchSource,
      branchDestination: this.branchDestination,
      description: this.description
    }
  }
}
