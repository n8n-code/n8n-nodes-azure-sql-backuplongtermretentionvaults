import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlBackuplongtermretentionvaultsApi implements ICredentialType {
        name = 'N8nDevAzureSqlBackuplongtermretentionvaultsApi';

        displayName = 'Azure SQL Backuplongtermretentionvaults API';

        icon: Icon = { light: 'file:../nodes/AzureSqlBackuplongtermretentionvaults/azure-sql-backuplongtermretentionvaults.png', dark: 'file:../nodes/AzureSqlBackuplongtermretentionvaults/azure-sql-backuplongtermretentionvaults.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Backuplongtermretentionvaults API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
