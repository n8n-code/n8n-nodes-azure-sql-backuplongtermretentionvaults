import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlBackuplongtermretentionvaults implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Backuplongtermretentionvaults',
		name: 'N8nDevAzureSqlBackuplongtermretentionvaults',
		icon: { light: 'file:./azure-sql-backuplongtermretentionvaults.png', dark: 'file:./azure-sql-backuplongtermretentionvaults.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Manages Azure SQL Server backup long-term retention vault read/update operations.',
		defaults: { name: 'Azure SQL Backuplongtermretentionvaults' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlBackuplongtermretentionvaultsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
