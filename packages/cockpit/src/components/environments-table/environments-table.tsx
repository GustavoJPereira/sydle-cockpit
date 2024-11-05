import { Component, h, Host, State } from '@stencil/core';
import { CustomAPI } from '@sydle/ui-api';

@Component({
  tag: 'sy-cockpit-environments-table',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class EnvironmentsTable {
  @State() data: { ambientes: any };
  @State() environmentsData: any[] | null;

  @State() gestorDependenciasAPI = new CustomAPI('6723e6ad231fd45377ab0d0f');

  @State() response = this.gestorDependenciasAPI.fetch('obterListaDeDependenciasDosAmbientes', {}, { forcePost: true });
  // let retorno;
  componentWillLoad() {
    this.response.then(
      (response) => {
        if (
          response &&
          typeof response == 'object' &&
          'data' in response &&
          response.data !== null &&
          typeof response.data === 'object' &&
          response.data != null &&
          'ambientes' in response.data
        ) {
          this.data = response.data;
        }

        if (this.data && typeof this.data == "object" && "ambientes" in this.data) {
          this.environmentsData = this.createNullRows(this.data.ambientes);
        }
      },
      (response) => {
        console.log(response);
      },
    );
  }

  createNullRows(environmentsWithdependencesTables : any): any {
    const tablesWithAllDependences : any = [];
    environmentsWithdependencesTables.forEach((environment: any) =>  {
      environment.dependenciasInstaladas.forEach((envDependence: any) => {
        const isInTableWithAllDependences : boolean = tablesWithAllDependences.some((singleDependence: any) => singleDependence.pacote == envDependence.pacote);
        if (!isInTableWithAllDependences) {
          tablesWithAllDependences.push({
            nome: envDependence.nome,
            pacote: envDependence.pacote,
            versao: "Não Instalado"
          })
        }
      })
    });

    const environmentsWithdependencesTablesWithNullRows: any = environmentsWithdependencesTables.map((environment: any) => {
      const dependenceWithNullRows: any = tablesWithAllDependences.map((tabDependence: any) => {
        const dependenceInTheEnvTable = environment.dependenciasInstaladas.find((envDependence: any) => tabDependence.pacote == envDependence.pacote)
          if (dependenceInTheEnvTable) {
            return dependenceInTheEnvTable;
          } else {
            return tabDependence;
          }
      });

      const envWithNullRows = {
        nome: environment.nome,
        versao: environment.versao,
        dependenciasInstaladas: dependenceWithNullRows
      }
      return envWithNullRows;
    });

    return environmentsWithdependencesTablesWithNullRows;
  }

  render() {
    return (
      <Host>
        {
          this.environmentsData?.[0] ?  
            <sy-cockpit-environment-table
              key={this.environmentsData[0].nome}
              environmentData={this.environmentsData[0]}
              firstEnv={true}
            ></sy-cockpit-environment-table>
          :
          <p></p>
        }
        {this.environmentsData && this.environmentsData.length > 1? (
          this.environmentsData.slice(1, this.environmentsData.length).map((environmentData) => (
            <sy-cockpit-environment-table
              key={environmentData.nome}
              environmentData={environmentData}
              firstEnv={false}
            ></sy-cockpit-environment-table>
          ))
        ) : (
          <sy-loading></sy-loading>
        )}
      </Host>
    );
  }
}
