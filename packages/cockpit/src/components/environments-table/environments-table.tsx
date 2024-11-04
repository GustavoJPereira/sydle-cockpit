import { Component, h, Host, State } from '@stencil/core';
// import { EnvironmentTable } from '../environment-table/environment-table';

// input
// {
//   "ambientes": [
//       {
//           "nome": "teste",
//           "versao": "x.x.x",
//           "dependenciasInstaladas": [
//               {
//                   "nome": "SYDLE UI",
//                   "versao": "2.8.2",
//                   "pacote": "sydle-ui",
//                   "atualizacaoDisponivel": null,
//                   "status": "APPLIED"
//               }
//           ]
//       }
//   ]
// }

@Component({
  tag: 'sy-cockpit-environments-table',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class EnvironmentsTable {

  @State() environmentsData = [
    {
      nome: 'elogroup-dev',
      versao: 'x.x.x',
      dependenciasInstaladas: [
        {
          nome: 'SYDLE UI',
          versao: '2.8.2',
          pacote: 'sydle-ui',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          "nome": "Service Desk - Portal",
          "versao": "5.2.2",
          "pacote": "com.sydle.servicedesk",
          "atualizacaoDisponivel": null,
          "status": "APPLIED"
        }
      ],
    },
    {
      nome: 'elogroup',
      versao: 'x.x.x',
      dependenciasInstaladas: [
        {
          nome: 'SYDLE UI',
          versao: '2.8.2',
          pacote: 'sydle-ui',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
      ],
    }
  ];


  // @State() teste = ["a", "b"];

  render() {
    return (
      <Host>
        {this.environmentsData.map(environmentData => (
          <sy-cockpit-environment-table key={environmentData.nome} environmentData={environmentData}></sy-cockpit-environment-table>
        ))}
      </Host>
    );
  }
}
