import Collection from 'ampersand-rest-collection'
import Repo from './repo' // filename should match up with model name below always for easy to read reasons

export default Collection.extend({
  url: 'https://api.github.com/user/repos',
  model: Repo
})