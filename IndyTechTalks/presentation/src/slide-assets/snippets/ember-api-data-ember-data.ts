import Route from '@ember/routing/route';

export default class ViewBlogPost extends Route {
  async model(params) {
    const post = await this.store.findRecord('post', params.postId, {
      include: 'blog,tags,author.bio,'
    });

    return { post };
  }
}
