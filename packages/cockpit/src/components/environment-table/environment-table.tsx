import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'sy-cockpit-environment-table',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class EnvironmentTable {
  @State() teste = [1, 2, 3];

  @Prop() environmentData: {
    nome: string;
    versao: string;
    dependenciasInstaladas: {
      nome: string;
      versao: string;
      pacote: string;
      atualizacaoDisponivel: boolean | null;
      status: string;
    }[];
  };
  // @Prop() teste: string;

  render() {
    return (
      <Host>
        <div>
          <p>{this.environmentData.nome}</p>
          <sy-cockpit-version-tag>{this.environmentData.versao}</sy-cockpit-version-tag>
        </div>
        <table>
          <tr>
            <th>Nome</th>
            <th>Pacote</th>
            <th>Versão</th>
          </tr>
          {this.environmentData.dependenciasInstaladas.map(dependencia => 
             <tr key={dependencia.pacote}>
              <td>{dependencia.nome}</td>
              <td>{dependencia.pacote}</td>
              <td>{dependencia.versao}</td>
            </tr>
          )}
        </table>
      </Host>
    );
  }
}
