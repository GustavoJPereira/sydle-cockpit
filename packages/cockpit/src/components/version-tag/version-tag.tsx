import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'sy-cockpit-version-tag',
  styleUrl: 'scss/index.scss',
  shadow: true,
})



export class VersionTag {

  
  @Prop() color: string;

  @State() colorsMap: any = {
    red: "red",
    blue: "blue",
    black: "black",
    default: "black", 
  };

  render() {
    return (
      <Host class={this.color ? this.colorsMap[this.color] : this.colorsMap["blue"]}>
      <slot></slot>
      </Host>
    );
  }
}
