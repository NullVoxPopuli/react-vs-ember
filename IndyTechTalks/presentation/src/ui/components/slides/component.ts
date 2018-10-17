import Component from '@ember/component';


export default class Slides extends Component {
  didInsertElement() {
    console.log(Reveal);
    Reveal.initialize();
  }
}
