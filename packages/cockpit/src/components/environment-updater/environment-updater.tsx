import { Component, Element, h, Host, State } from '@stencil/core';

@Component({
  tag: 'sy-cockpit-environment-updater',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class EnvironmentUpdater {
  // @Prop() //esses dados virão de fora mais tarde
  @State()
  environmentsData: any[] = [
    {
      nome: 'EloGroup - DEV',
      versao: '8.4.53',
      dependenciasInstaladas: [
        {
          nome: 'Sincronização de dados',
          versao: '1.0.1',
          pacote: 'sincronizaçãodedados',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        { nome: 'SYDLE UI', versao: '2.8.2', pacote: 'sydle-ui', atualizacaoDisponivel: null, status: 'APPLIED' },
        {
          nome: 'SYDLE ONE WS1',
          versao: '8.4.3',
          pacote: 'com.sydle.ui.ws1.snapshot',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Workspaces',
          versao: '1.1.2',
          pacote: 'com.sydle.ui.workspaces.snapshot',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        { nome: '5.1.2 - CRM', versao: '5.1.2', pacote: 'crm', atualizacaoDisponivel: null, status: 'APPLIED' },
        {
          nome: '1.8.1 - Modelagem',
          versao: '1.8.1',
          pacote: 'modelagem',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: '3.4.3 - Service Desk - Atendimento',
          versao: '3.4.3',
          pacote: 'service-desk-atendimento',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Avaliação NPS',
          versao: '1.5.1',
          pacote: 'com.sydle.nps',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Utils Gustavo',
          versao: '1.1.0',
          pacote: 'utilsgustavo',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        { nome: 'CDN', versao: '1.1.1', pacote: 'com.sydle.ui.cdn', atualizacaoDisponivel: null, status: 'APPLIED' },
        { nome: 'SYDLE UI', versao: '2.13.2', pacote: 'com.sydle.ui', atualizacaoDisponivel: null, status: 'APPLIED' },
        {
          nome: 'CRM Tracking',
          versao: '2.1.1',
          pacote: 'com.sydle.crmtracking',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Workspaces Core',
          versao: '2.8.2',
          pacote: 'com.sydle.ui.workspaces.core',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Workspaces',
          versao: '2.8.2',
          pacote: 'com.sydle.ui.workspaces',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Controle de migrações',
          versao: '1.1.0',
          pacote: 'com.sydle.migrationscontroller',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Configuração de início de rotina',
          versao: '1.3.3',
          pacote: 'com.sydle.job-schedule',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Indicadores',
          versao: '1.3.4',
          pacote: 'com.sydle.indicators',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Gestão de documentos',
          versao: '2.1.0',
          pacote: 'com.sydle.ged',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'IA - Autopilot',
          versao: '1.5.3',
          pacote: 'com.sydle.ai',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        { nome: 'CRM', versao: '7.0.0', pacote: 'com.sydle.crm', atualizacaoDisponivel: null, status: 'APPLIED' },
        {
          nome: 'Service Desk - Portal',
          versao: '5.2.2',
          pacote: 'com.sydle.servicedesk',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: '2.0.3 - Objetos do pacote de localização',
          versao: '2.0.3',
          pacote: 'com.sydle.location',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Serviços - Acompanhe sua solicitação',
          versao: '4.0.0',
          pacote: 'servicosacompanhesuasolicitacao',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Modelagem',
          versao: '1.11.1',
          pacote: 'com.sydle.modeling',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        { nome: 'Serviço de consulta - Férias', pacote: 'serviçodeconsulta-férias', versao: 'Não Instalado' },
        { nome: 'SYDLE ONE Legacy 8.3', pacote: 'com.sydle.ui.ws1', versao: 'Não Instalado' },
        { nome: 'Extensão de classe - Mensagem e mensagem da fila', pacote: 'util.mensagem', versao: 'Não Instalado' },
        { nome: 'Governo - Recursos Humanos', pacote: 'governo-recursoshumanos', versao: 'Não Instalado' },
        { nome: '1.6.0 - Gestão de documentos', pacote: 'ged', versao: 'Não Instalado' },
        { nome: 'Fórum - UI', pacote: 'com.sydle.collaboration.forum.ui', versao: 'Não Instalado' },
        { nome: 'SYDLE ONE Workspaces', pacote: 'sydle.one.workspaces', versao: 'Não Instalado' },
        {
          nome: 'Registro de informações de empréstimo',
          pacote: 'registrodeinformacoesdeemprestimo',
          versao: 'Não Instalado',
        },
        { nome: 'Fórum', pacote: 'com.sydle.collaboration.forum', versao: 'Não Instalado' },
        {
          nome: 'Emissão de certidão de crédito (Apenas processo)',
          pacote: 'emissãodecertidãodecrédito(apenasprocesso)',
          versao: 'Não Instalado',
        },
        {
          nome: 'Serviços criados Pelo TCE em hom para dev',
          pacote: 'serviçoscriadospelotceemhomparadev',
          versao: 'Não Instalado',
        },
        {
          nome: 'Documento Oficial - Validação de documentos',
          pacote: 'validacaodedocumentos',
          versao: 'Não Instalado',
        },
        { nome: 'Utils - WebServices', pacote: 'com.sydle.webservice', versao: 'Não Instalado' },
        { nome: 'Service Desk - Atendimento', pacote: 'com.sydle.servicedesk.itsm', versao: 'Não Instalado' },
        { nome: 'Learning (ONE 8.X)', pacote: 'com.sydle.education.learning', versao: 'Não Instalado' },
        { nome: 'Educação (ONE 8.X)', pacote: 'com.sydle.education', versao: 'Não Instalado' },
        {
          nome: 'Cockpit - Gestão de Dependências [TESTES]',
          pacote: 'cockpit.gestaodeambientes',
          versao: 'Não Instalado',
        },
      ],
    },
    {
      nome: 'TCE CE - DEV',
      versao: '8.4.53',
      dependenciasInstaladas: [
        {
          nome: 'Sincronização de dados',
          versao: '1.0.3',
          pacote: 'sincronizaçãodedados',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        { nome: 'SYDLE UI', versao: '2.8.1', pacote: 'sydle-ui', atualizacaoDisponivel: null, status: 'APPLIED' },
        { nome: 'SYDLE ONE WS1', pacote: 'com.sydle.ui.ws1.snapshot', versao: 'Não Instalado' },
        { nome: 'Workspaces', pacote: 'com.sydle.ui.workspaces.snapshot', versao: 'Não Instalado' },
        { nome: '5.1.2 - CRM', versao: '5.1.2', pacote: 'crm', atualizacaoDisponivel: null, status: 'APPLIED' },
        { nome: '1.8.1 - Modelagem', pacote: 'modelagem', versao: 'Não Instalado' },
        { nome: '3.4.3 - Service Desk - Atendimento', pacote: 'service-desk-atendimento', versao: 'Não Instalado' },
        {
          nome: 'Avaliação NPS',
          versao: '1.5.1',
          pacote: 'com.sydle.nps',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Utils Gustavo',
          versao: '1.1.3',
          pacote: 'utilsgustavo',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        { nome: 'CDN', versao: '1.1.1', pacote: 'com.sydle.ui.cdn', atualizacaoDisponivel: null, status: 'APPLIED' },
        { nome: 'SYDLE UI', versao: '2.14.2', pacote: 'com.sydle.ui', atualizacaoDisponivel: null, status: 'APPLIED' },
        {
          nome: 'CRM Tracking',
          versao: '2.1.3',
          pacote: 'com.sydle.crmtracking',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Workspaces Core',
          versao: '2.8.2',
          pacote: 'com.sydle.ui.workspaces.core',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Workspaces',
          versao: '2.8.2',
          pacote: 'com.sydle.ui.workspaces',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Controle de migrações',
          versao: '1.1.1',
          pacote: 'com.sydle.migrationscontroller',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Configuração de início de rotina',
          versao: '1.3.3',
          pacote: 'com.sydle.job-schedule',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Indicadores',
          versao: '1.3.4',
          pacote: 'com.sydle.indicators',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Gestão de documentos',
          versao: '2.1.0',
          pacote: 'com.sydle.ged',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'IA - Autopilot',
          versao: '1.5.3',
          pacote: 'com.sydle.ai',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        { nome: 'CRM', versao: '7.0.0', pacote: 'com.sydle.crm', atualizacaoDisponivel: null, status: 'APPLIED' },
        {
          nome: 'Service Desk - Portal',
          versao: '6.4.7',
          pacote: 'com.sydle.servicedesk',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Objetos do pacote de localização',
          versao: '2.0.3',
          pacote: 'com.sydle.location',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Serviços - Acompanhe sua solicitação',
          pacote: 'servicosacompanhesuasolicitacao',
          versao: 'Não Instalado',
        },
        {
          nome: 'Modelagem',
          versao: '1.11.1',
          pacote: 'com.sydle.modeling',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Serviço de consulta - Férias',
          versao: '1.0.0',
          pacote: 'serviçodeconsulta-férias',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'SYDLE ONE Legacy 8.3',
          versao: '8.3.35',
          pacote: 'com.sydle.ui.ws1',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Extensão de classe - Mensagem e mensagem da fila',
          versao: '1.0.8',
          pacote: 'util.mensagem',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Governo - Recursos Humanos',
          versao: '1.0.8',
          pacote: 'governo-recursoshumanos',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: '1.6.0 - Gestão de documentos',
          versao: '1.6.0',
          pacote: 'ged',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Fórum - UI',
          versao: '1.1.4',
          pacote: 'com.sydle.collaboration.forum.ui',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'SYDLE ONE Workspaces',
          versao: '1.3.0',
          pacote: 'sydle.one.workspaces',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Registro de informações de empréstimo',
          versao: '1.0.2',
          pacote: 'registrodeinformacoesdeemprestimo',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Fórum',
          versao: '2.1.0',
          pacote: 'com.sydle.collaboration.forum',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Emissão de certidão de crédito (Apenas processo)',
          versao: '1.0.2',
          pacote: 'emissãodecertidãodecrédito(apenasprocesso)',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Serviços criados Pelo TCE em hom para dev',
          versao: '1.1.0',
          pacote: 'serviçoscriadospelotceemhomparadev',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Documento Oficial - Validação de documentos',
          versao: '2.0.0',
          pacote: 'validacaodedocumentos',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Utils - WebServices',
          versao: '3.0.0',
          pacote: 'com.sydle.webservice',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Service Desk - Atendimento',
          versao: '3.8.1',
          pacote: 'com.sydle.servicedesk.itsm',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Learning (ONE 8.X)',
          versao: '1.4.0',
          pacote: 'com.sydle.education.learning',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Educação (ONE 8.X)',
          versao: '4.5.2',
          pacote: 'com.sydle.education',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
        {
          nome: 'Cockpit - Gestão de Dependências [TESTES]',
          versao: '0.0.2',
          pacote: 'cockpit.gestaodeambientes',
          atualizacaoDisponivel: null,
          status: 'APPLIED',
        },
      ],
    },
  ];

  @State()
  dependencesAndAnbienceTable: any[] = [
    {
      name: 'Sincronização de dados',
      package: 'sincronizaçãodedados',
      lastVersion: '1.0.1',
      environments: [
        {
          name: 'EloGroup - DEV',
          version: '1.0.1',
          status: 'UPDATED',
        },
        {
          name: 'TCE CE - DEV',
          version: '1.0.0',
          status: 'UPDATABLE',
        },
      ],
    },
  ];

  @State()
  statusActionMap = {
    UPDATED: 'ultima versão',
    UPDATABLE: 'atualizar',
    NOT_INSTALLED: 'instalar',
  };

  @Element() element: HTMLElement;

  environmentSelect: any;
  packagesSelect: any;
  actionsSelect: any;

  filterDependencesAndAnbienceTable(
    environments: any[],
    packages: any[],
    actions: any[],
    environmentsData: any[],
  ): { package: string; lastVersion: string; environments: any[] }[] {
    console.log(environments, packages, actions, environmentsData);
    let dependencesAndAnbienceTable = packages.map(
      (dependence): { package: string; lastVersion: string; environments: any } => {
        return {
          package: dependence,
          lastVersion: '3.0.0',
          environments: [],
        };
      },
    );

    dependencesAndAnbienceTable = dependencesAndAnbienceTable.map((dependenceAndAnbienceTable) => {
      dependenceAndAnbienceTable.environments = environmentsData.map((environment) => {
        const packageInEnvironment: any = environment.dependenciasInstaladas.find(
          (dep: any) => dep.versao != 'Não Instalado' && dep.pacote == dependenceAndAnbienceTable.package,
        );

        if (packageInEnvironment) {
          const versionDiff: string =
            packageInEnvironment.versao !== 'Não Instalado' &&
            this.versionIsEqualOrGreater(dependenceAndAnbienceTable.lastVersion, packageInEnvironment.versao)
              ? 'UPDATABLE'
              : 'UPDATED';

          return {
            name: environment.nome,
            version: packageInEnvironment.versao,
            status: versionDiff,
          };
        } else {
          return {
            name: environment.nome,
            version: 'NOT_INSTALLED',
            status: 'NOT_INSTALLED',
          };
        }
      });

      return dependenceAndAnbienceTable;
    });

    return dependencesAndAnbienceTable;
    // return [
    // {
    //   name: 'Sincronização de dados',
    //   package: 'sincronizaçãodedados',
    //   lastVersion: '1.0.1',
    //   environments: [
    //     {
    //       name: 'EloGroup - DEV',
    //       version: '1.0.1',
    //       status: 'UPDATED',
    //     },
    //     {
    //       name: 'TCE CE - DEV',
    //       version: '1.0.0',
    //       status: 'UPDATABLE',
    //     },
    //   ],
    // },
    // ];
  }
  // filterDependencesAndAnbienceTable(environments, packages, actions) : any {
  // environmentsFiltered = ;
  // }

  async updateTable(select: any): Promise<void> {
    select.addEventListener('sySelectDidChange', async () => {
      let environmentsSelected: any[] = [];
      let packagesSelected: any[] = [];
      let actionsSelected: any[] = [];
      await this.environmentSelect.getTomSelectInstance().then((response: any) => {
        environmentsSelected = response.items;
      });

      await this.packagesSelect.getTomSelectInstance().then((response: any) => {
        packagesSelected = response.items;
      });

      await this.actionsSelect.getTomSelectInstance().then((response: any) => {
        actionsSelected = response.items;
      });

      this.dependencesAndAnbienceTable = this.filterDependencesAndAnbienceTable(
        environmentsSelected,
        packagesSelected,
        actionsSelected,
        this.environmentsData,
      );
    });
  }

  componentDidLoad() {
    this.environmentSelect ? this.updateTable(this.environmentSelect) : null;

    this.packagesSelect ? this.updateTable(this.packagesSelect) : null;

    this.actionsSelect ? this.updateTable(this.actionsSelect) : null;
  }

  versionIsEqualOrGreater(version1: string, version2: string): boolean {
    const version1Decomposed = version1.split('.');
    const version2Decomposed = version2.split('.');

    if (version1Decomposed[0] > version2Decomposed[0]) {
      return true;
    }
    if (version1Decomposed[1] > version2Decomposed[1]) {
      return true;
    }
    if (version1Decomposed[2] > version2Decomposed[2]) {
      return true;
    }

    if (version1Decomposed[2] == version2Decomposed[2]) return true;

    return false;
  }

  render() {
    (async () => {
      await customElements.whenDefined('sy-select');
      const divSySelect = this.element.shadowRoot?.querySelector('div') as HTMLElement;
      this.environmentSelect = divSySelect.childNodes[0];
      this.packagesSelect = divSySelect.childNodes[1];
      this.actionsSelect = divSySelect.childNodes[2];
    })();

    return (
      <Host>
        <div>
          <sy-select
            label="Ambientes"
            enable-select-all="true"
            enable-search="true"
            multiple="true"
            class="teste"
            sySelectDidChange={(el: any) => console.log(el)}
          >
            {this.environmentsData.map((environmentData) => (
              <option key={environmentData.nome} value={environmentData.nome}>
                {environmentData.nome}
              </option>
            ))}
          </sy-select>
          <sy-select label="Pacotes" enable-select-all="true" enable-search="true" multiple="true">
            {this.environmentsData?.[0].dependenciasInstaladas
              ? this.environmentsData[0].dependenciasInstaladas.map((dep: any) => (
                  <option key={dep.pacote} value={dep.pacote}>
                    {dep.nome}
                  </option>
                ))
              : null}
            <option value="sydle-ui">sydle-ui</option>
          </sy-select>
          <sy-select label="Ações" enable-search="true" multiple="true">
            <option value="UPDATE">Atualizar</option>
            <option value="INSTALL">Instalar</option>
          </sy-select>
        </div>

        <sy-cockpit-default-table>
          <tr>
            <th>Pacote</th>
            <th>Versão a Instalar</th>
            {this.dependencesAndAnbienceTable?.[0]
              ? this.dependencesAndAnbienceTable[0].environments.map(
                  (environment: { name: string | number | undefined }) => (
                    <th key={environment.name}>{environment.name}</th>
                  ),
                )
              : null}
          </tr>
          {this.dependencesAndAnbienceTable?.[0]
            ? this.dependencesAndAnbienceTable.map((dependenceInAllEnvironments) => (
                <tr key={dependenceInAllEnvironments.package}>
                  <td>{dependenceInAllEnvironments.package}</td>
                  <td>{dependenceInAllEnvironments.lastVersion}</td>
                  {dependenceInAllEnvironments.environments.map((evironment: { status: string; name: string }) => (
                    <td key={evironment.name}>
                      <sy-cockpit-version-tag>
                        {this.statusActionMap && evironment.status in this.statusActionMap
                          ? this.statusActionMap[evironment.status as keyof typeof this.statusActionMap]
                          : null}
                      </sy-cockpit-version-tag>
                    </td>
                  ))}
                </tr>
              ))
            : null}
        </sy-cockpit-default-table>

        <sy-button color="primary">Aplicar</sy-button>
      </Host>
    );
  }
}
