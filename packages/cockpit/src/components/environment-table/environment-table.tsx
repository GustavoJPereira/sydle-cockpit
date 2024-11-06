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

  @Prop() firstEnv: boolean | null;

  render() {
    return (
      <Host>
        <div>
          <p>{this.environmentData.nome}</p>
          <sy-cockpit-version-tag>{this.environmentData.versao}</sy-cockpit-version-tag>
        </div>
        <sy-cockpit-default-table>
          <tr>
            {this.firstEnv ? <th>Nome</th> : null}
            {this.firstEnv ? <th>Pacote</th> : null}
            <th>Versão</th>
          </tr>
          {this.environmentData.dependenciasInstaladas.map(dependencia => 
             <tr key={dependencia.pacote}>
              {this.firstEnv ? <td>{dependencia.nome}</td> : null}
              {this.firstEnv ? <td>{dependencia.pacote}</td> : null}
              <td>{dependencia.versao}</td>
            </tr>
          )}
        </sy-cockpit-default-table>
      </Host>
    );
  }
}
