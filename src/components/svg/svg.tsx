/* @jsx h */
import { Component, h, Prop, JSX } from "@stencil/core";

@Component({
  tag: "ds-svg",
  styleUrl: "svg.css",
  shadow: true
})
export class HTMLDsSvgElement {
  /** asset url,can be relative or absolute */
  @Prop() url: string;
  /** svg size in px, em, rem, %,... */
  @Prop() size = "32px";
  /** asset as string */
  @Prop({ mutable: true }) svg = "";

  render(): JSX.Element {
    return (
      <div
        id="svg"
        innerHTML={this.svg}
        style={{
          "--size": this.size
        }}
      />
    );
  }
}
