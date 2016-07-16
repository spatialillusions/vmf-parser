var headerstruct = {name:'header', type:'group', items:[
	{name:'Version', length:4 , type:'number'},
	{name:'DataCompressionType', length: 2, type:'number', fpi:true},
	{name:'OriginatorAddressGroup', type:'group', gpi:true, items: [
		{name:'Urn', length: 24, type:'number', fpi:true},
		{name:'UnitName', length:448, type:'string', fpi:true},
	],
	{name:'RecipientAddressGroup', type:'group', gpi:true, gri:true, items: [
		{name:'Urn', length: 24, type:'number', fpi:true},
		{name:'UnitName', length: 448, type:'string', fpi:true}
	],
	{name:'InformationAddressGroup', type:'group', gpi:true, gri:true, items: [
		{name:'Urn', length: 24, type:'number', fpi:true},
		{name:'UnitName', length: 448, type:'string', fpi:true}
	],
	{name:'HeaderSize', length: 16, type:'number', fpi:true},
	{name:'FutureUse1', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]},
	{name:'FutureUse2', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]},
	{name:'FutureUse3', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]},
	{name:'FutureUse4', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]},
	{name:'FutureUse5', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]},
	{name:'MessageHandlingGroup', type:'group', gri:true, items: [
		{name:'Umf', length: 4, type:'number'},
		{name:'MessageStandardVersion', length: 4, type:'number', fpi:true},
		{name:'VmfMessageIdentificationGroup', type:'group', gpi:true, items: [
			{name:'Fad', length: 4, type:'number'},
			{name:'MessageNumber', length: 7, type:'number'},
			{name:'MessageSubtype', length: 7, type:'number', fpi:true}	
		]},
		{name:'FileName', length: 448, type:'string', fpi:true},
		{name:'MessageSize', length: 20, type:'number', fpi:true},
		{name:'OperationIndicator', length: 2, type:'number'},
		{name:'RetransmitIndicator', length: 1, type:'number'},
		{name:'MessagePrecedenceCode', length: 3, type:'number'},
		{name:'SecurityClassification', length: 2, type:'number'},
		{name:'ControlReleaseMarking', length: 9, type:'number', fpi:true, fri:true},
		{name:'OriginatorDtg', type:'group', gpi:true, items: [
			{name:'Year', length: 7, type:'number'},
			{name:'Month', length: 4, type:'number'},
			{name:'Day', length: 5, type:'number'},
			{name:'Hour', length: 5, type:'number'},
			{name:'Minute', length: 6, type:'number'},
			{name:'Second', length:6 , type:'number'},
			{name:'DtgExtension', length: 12, type:'number', fpi:true}
		]},
		{name:'PerishabilityDtg', type:'group', gpi:true, items:[
			{name:'Year', length: 7, type:'number'},
			{name:'Month', length: 4, type:'number'},
			{name:'Day', length: 5, type:'number'},
			{name:'Hour', length: 5, type:'number'},
			{name:'Minute', length: 6, type:'number'},
			{name:'Second', length: 6, type:'number'}
		]},
		{name:'AcknowledgmentRequestGroup', type:'group', gpi:true, items: [
			{name:'MachineAcknowledgeRequestIndicator', length: 1, type:'number'},
			{name:'OperatorAcknowledgeRequestIndicator', length: 1, type:'number'},
			{name:'OperatorReplyRequestIndicator', length: 1, type:'number'}
		]},
		{name:'ResponseDataGroup', type:'group', gpi:true, items: [
			{name:'Year', length: 7, type:'number'},
			{name:'Month', length: 4, type:'number'},
			{name:'Day', length: 5, type:'number'},
			{name:'Hour', length: 5, type:'number'},
			{name:'Minute', length: 6, type:'number'},
			{name:'Second', length: 6, type:'number'},
			{name:'DtgExtension', length: 12, type:'number', fpi:true},
			{name:'ResponseToAcknowledgeRequest', length: 3, type:'number'},
			{name:'CantcoReasonCode', length: 3, type:'number', fpi:true},
			{name:'CantproReasonCode', length: 6, type:'number', fpi:true},
			{name:'ReplyAmplification', length: 350, type:'number', fpi:true}
		]},
		{name:'ReferenceMessageDataGroup', type:'group', gpi:true, gri:true, items: [
				{name:'Urn', length: 24, type:'number', fpi:true},
				{name:'UnitName', length: 448, type:'string', fpi:true},
				{name:'Year', length: 7, type:'number'},
				{name:'Month', length: 4, type:'number'},
				{name:'Day', length: 5, type:'number'},
				{name:'Hour', length: 5, type:'number'},
				{name:'Minute', length: 6, type:'number'},
				{name:'Second', length: 6, type:'number'},
				{name:'DtgExtension', length: 12, type:'number', fpi:true}
		]},
		{name:'FutureUse6', type:'group', gpi:true, items:[
			{name:'size', length: 12, type:'number'}
		]},
		{name:'FutureUse7', type:'group', gpi:true, items:[
			{name:'size', length: 12, type:'number'}
		]},
		{name:'FutureUse8', type:'group', gpi:true, items:[
			{name:'size', length: 12, type:'number'}
		]},
		{name:'FutureUse9', type:'group', gpi:true, items:[
			{name:'size', length: 12, type:'number'}
		]},
		{name:'FutureUse10', type:'group', gpi:true, items:[
			{name:'size', length: 12, type:'number'}
		]},
		{name:'MessageSecurityGroup', type:'group', gpi:true, items: [
			{name:'SecurityParametersInformation', length: 4, type:'number'},
			{name:'KeyingMaterialGroup', type:'group', gpi:true, items: [
				{name:'Length', length: 3, type:'number'},
				{name:'KeyingMaterialId', length: 64, type:'number'}
			]},
			{name:'CryptographicInitializationGroup', type:'group', gpi:true, items: [
				{name:'Length', length: 4, type:'number'},
				{name:'CryptographicInitialization', length: 1024, type:'number'}
			]},
			{name:'KeyTokenGroup', type:'group', gpi:true, items: [
				{name:'Length', length: 8, type:'number'},
				{name:'KeyToken', length: [16384], type:'number', fri:true}
			]},
			{name:'AuthenticationAGroup', type:'group', gpi:true, items: [
				{name:'Length', length: 7, type:'number'},
				{name:'DigitalSignature', length: 8192, type:'number'}
			]},
			{name:'AuthenticationBGroup', type:'group', gpi:true, items: [
				{name:'Length', length: 7, type:'number'},
				{name:'DigitalSignature', length: 8192, type:'number'}
			]},
			{name:'SignedAcknowledgeRequestIndicator', length: 1, type:'number'},
			{name:'MessageSecurityPaddingGroup', type:'group', gpi:true, items: [
				{name:'Length', length: 8, type:'number'},
				{name:'MessageSecurityPadding', length: 2040, type:'number', fpi:true}
			]}
		]}
	]},
	{name:'FutureUse11', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]},
	{name:'FutureUse12', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]},
	{name:'FutureUse13', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]},
	{name:'FutureUse14', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]},
	{name:'FutureUse15', type:'group', gpi:true, items:[
		{name:'size', length: 12, type:'number'}
	]}
]}