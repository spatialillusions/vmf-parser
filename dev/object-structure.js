var header = {
	Version :4 ,
	DataCompressionType : 2,
	OriginatorAddressGroup : {
		Urn : 24,
		UnitName :448 
	},
	RecipientAddressGroup : [
		{
			Urn : 24,
			UnitName : 448,
		}
	],
	InformationAddressGroup : [
		{
			Urn : 24,
			UnitName : 448,
		}
	],
	HeaderSize : 16,
	FutureUse1 : 1,
	FutureUse2 : 1,
	FutureUse3 : 1,
	FutureUse4 : 1,
	FutureUse5 : 1,
	MessageHandlingGroup : [
		{
			Umf : 4,
			MessageStandardVersion : 4,
			VmfMessageIdentificationGroup : {
				Fad : 4,
				MessageNumber : 7,
				MessageSubtype : 7,	
			}
		},
		FileName : 448,
		MessageSize : 20,
		OperationIndicator : 2,
		RetransmitIndicator : 1,
		MessagePrecedenceCode : 3,
		SecurityClassification : 2,
		ControlReleaseMarking : [9],
		OriginatorDtg : {
			Year : 7,
			Month : 4,
			Day : 5,
			Hour : 5,
			Minute : 6,
			Second :6 ,
			DtgExtension : 12
		},
		PerishabilityDtg : {
			Year : 7,
			Month : 4,
			Day : 5,
			Hour : 5,
			Minute : 6,
			Second : 6
		},
		AcknowledgmentRequestGroup : {
			MachineAcknowledgeRequestIndicator : 1,
			OperatorAcknowledgeRequestIndicator : 1,
			OperatorReplyRequestIndicator : 1
		},
		ResponseDataGroup : {
			Year : 7,
			Month : 4,
			Day : 5,
			Hour : 5,
			Minute : 6,
			Second : 6,
			DtgExtension : 12,
			ResponseToAcknowledgeRequest	: 3,
			CantcoReasonCode : 3,
			CantproReasonCode : 6,
			ReplyAmplification : 350
		},
		ReferenceMessageDataGroup : [
			{
				Urn : 24,
				UnitName : 448,
				Year : 7,
				Month : 4,
				Day : 5,
				Hour : 5,
				Minute : 6,
				Second : 6,
				DtgExtension : 12
			}
		],
		FutureUse6 : 1,
		FutureUse7 : 1,
		FutureUse8 : 1,
		FutureUse9 : 1,
		FutureUse10 : 1,
		MessageSecurityGroup : {
			SecurityParametersInformation : 4,
			KeyingMaterialGroup : {
				Length : 3,
				KeyingMaterialId : 64
			},
			CryptographicInitializationGroup : {
				Length : 4,
				CryptographicInitialization : 1024,
			},
			KeyTokenGroup : {
				Length : 8,
				KeyToken : [16384]
			}
			AuthenticationAGroup :{
				Length : 7,
				DigitalSignature : 8192
			},
			AuthenticationBGroup : {
				Length : 7,
				DigitalSignature : 8192
			},
			SignedAcknowledgeRequestIndicator : 1,
			MessageSecurityPaddingGroup : {
				Length : 8,
				MessageSecurityPadding : 2040
			}
		}
	],
	FutureUse11 : 1,
	FutureUse12 : 1,
	FutureUse13 : 1,
	FutureUse14 : 1,
	FutureUse15 : 1
}