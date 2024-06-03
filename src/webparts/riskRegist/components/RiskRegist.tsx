import * as React from 'react';
// import styles from './RiskRegist.module.scss';
import type { IRiskRegistProps } from './IRiskRegistProps';
import { sp } from "@pnp/sp";
import { graph } from "@pnp/graph";
import MainComponent from './MainComponent';

export default class RiskRegist extends React.Component<IRiskRegistProps, {}> {

  constructor(prop: IRiskRegistProps, state: {}) {
    super(prop);
    sp.setup({
      spfxContext: this.props.context as any,
    });
    graph.setup({
      spfxContext: this.props.context as any,
    });
  }
  public render(): React.ReactElement<IRiskRegistProps> {
  this.props;

    return (
       <section>
         <MainComponent context = {this.props.context}/>
       </section>
    )
  }
}
