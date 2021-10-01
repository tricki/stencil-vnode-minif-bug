import { Component, Prop, h, VNode } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  componentWillLoad() {
    this.testVnodeBug();
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  testVnodeBug() {
    const vnode: VNode = <div class="foo">bar</div>

    console.log(vnode);
    console.log({
      tag: vnode.$tag$,
      name: vnode.$name$,
      attrs: vnode.$attrs$,
      text: vnode.$text$,
      children: vnode.$children$,
      elm: vnode.$elm$,
      flags: vnode.$flags$,
      key: vnode.$key$,
    });
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
