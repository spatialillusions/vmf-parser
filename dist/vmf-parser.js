'use strict';
var VMF = class {
	constructor(binary) {
		this.binary = new Uint8Array(binary);
		this.header, this.headerLength,this.message, this.messageLength;
		this._headermessage = {name:'header', type:'group', items:[
			{name:'Version', length:4 , type:'number'},
			{name:'DataCompressionType', length: 2, type:'number', fpi:true},
			{name:'OriginatorAddressGroup', type:'group', gpi:true, items: [
				{name:'Urn', length: 24, type:'number', fpi:true},
				{name:'UnitName', length:448, type:'string', fpi:true},
			]},
			{name:'RecipientAddressGroup', type:'group', gpi:true, gri:true, items: [
				{name:'Urn', length: 24, type:'number', fpi:true},
				{name:'UnitName', length: 448, type:'string', fpi:true}
			]},
			{name:'InformationAddressGroup', type:'group', gpi:true, gri:true, items: [
				{name:'Urn', length: 24, type:'number', fpi:true},
				{name:'UnitName', length: 448, type:'string', fpi:true}
			]},
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
			]};
	}
	readHeader(){
		this.headerLength = 0;
		var message = this.readMessage(this._headermessage);
		this.header = message;
		this.headerLength = this.messageLength;
		return message;
	}
	readMessage(messagetype){
		var readByte = this.headerLength || 0;
		var bitString = '';
		function fpiCheck(field){
			if(field.fpi){
				if(parseInt(readBits(1)))return friCheck(field);
			}else{
				return friCheck(field);
			}
		}
		function friCheck(field){
			if(field.fri){
				var data = [];
				var fri = 1;
				while(fri){
					fri = parseInt(readBits(1));
					data.push(getField(field));
				}
				return data;
			}else{
				return getField(field);
			}
		}
		function readBits(bitsToRead){
			while(bitString.length < bitsToRead){
				readData();
			}
			var bits = bitString.slice(-bitsToRead);
			bitString = bitString.slice(0,-bitsToRead);
			return bits;
		}
		function readData(){
            var octet = selfBinary[readByte].toString(2);
			bitString = Array(8 - octet.length + 1).join(0) + octet + bitString;
			readByte++;
		}
		function getField(field){
			var data;
			if(field.type == 'string'){
				var bitsRead = 0;
				data = '';
				while (bitsRead < field.length){
					var bits = readBits(7);
					if(bits == '1111111')break;
					data += String.fromCharCode(parseInt(bits,2));
					bitsRead += 7;
				}
			}else{
				data = parseInt(readBits(field.length),2);
			}
			//console.log(field.name + ' - ' + field.length + 'bits - ' + field.type + ' Value: '+ data);
			return data;
		}
		function gpiCheck(group){
			if(group.gpi){
				if(parseInt(readBits(1)))return griCheck(group);
			}else{
				return griCheck(group);
			}
		}
		function griCheck(group){
			if(group.gri){
				var data = [];
				var gri = 1;
				while(gri){
					gri = parseInt(readBits(1));
					data.push(read(group.items));
				}
				return data;
			}else{
				return read(group.items);
			}
		}

		function read(messagetype){
			var obj = {};
			for( var i = 0; i<messagetype.length; i++){
				if(messagetype[i].type == 'group'){
					//console.log('GROUP: ' +messagetype[i].name)
					obj[messagetype[i].name] = gpiCheck(messagetype[i]);
				}else{
					obj[messagetype[i].name] = fpiCheck(messagetype[i]);
				}
			}
			return obj;
		}
        
        var selfBinary = this.binary;
		var message = read(messagetype.items);
		this.message = message;
		this.messageLength = readByte;
		return message;
	}
	setBinary(binary){
		this.binary = new Uint8Array(binary);
		return this;
	}
	setHeader(header){
		this.header = header;
		return this;
	}
	setMessage(message){
		this.message = message;
		return this;
	}
	writeHeaderToBinary(){
		var header = this.writeMessageToBinary(this._headermessage);
		this.headerLength = this.messageLength;
		return header;
	}
	writeMessageToBinary(messagetype){
		function fpiCheck(obj, field){
			if(field.fpi){
				var fpi;
				if(obj){
					fpi = '1';
					return friCheck(obj, field) + fpi;
				}else{
					fpi = '0';
					return fpi;
				}
			}else{
				return friCheck(obj, field);
			}
		}
		function friCheck(obj, field){
			if(field.fri){
				var data = '';
				var fri;
				for(var i = 0; i<obj.length; i++){
					if(i == obj.length-1){
						fri = '0';
					}else{
						fri = '1';
					}
					data = setField(obj[i], field) + fri + data;
				}
				return data;
			}else{
				return setField(obj, field);
			}
		}
		function gpiCheck(obj, group){
			if(group.gpi){
				var gpi;
				if(obj){
					gpi = '1';
					return griCheck(obj, group) + gpi;
				}else{
					gpi = '0';
					return gpi;
				}
			}else{
				return griCheck(obj, group);
			}
		}
		function griCheck(obj, group){
			if(group.gri){
				var data = '';
				var gri;
				for(var i = 0; i<obj.length; i++){
					if(i == obj.length-1){
						gri = '0';
					}else{
						gri = '1';
					}
					data = write(obj[i], group.items) + gri + data;
				}
				return data;
			}else{
				return write(obj, group.items);
			}
		}
		function setField(obj, field){
			function toBinaryString(dec,length){
				var bin = dec.toString(2);
				if(length){bin = Array(length - bin.length + 1).join(0) + bin;}
				return bin;
			}
			//console.log(field.name + ' - ' + field.length + 'bits - ' + field.type + ' Value: '+ obj);
			if(typeof obj != 'undefined'){
				if(field.type == 'string'){
					var charsRead = 0;
					var data = '';
					while ((charsRead*7) < field.length){
						if(charsRead == obj.length){
							data = '1111111' + data;
							break;
						};
						data = toBinaryString(obj.charCodeAt(charsRead),7) + data;
						charsRead ++;
					}
					return data;
				}else{
					return toBinaryString(obj, field.length);
				}
			}else{
				return '';
			}
		}
		function toByteArray(bin){
			if(bin.length % 8){
				bin = Array(8 - (bin.length % 8) + 1).join(0) + bin;
			}
			var bytes = bin.length / 8;
			var bytearray = new Uint8Array(bytes);
			for (var i = 0; i<bytes; i++){
				var octet = bin.substring(bin.length-(8*i)-8,bin.length-(8*i));
				bytearray[i] = parseInt(octet,2);
			}
			return bytearray;
		}
		function write(message, messagetype){
			var binString = '';
			for( var i = 0; i<messagetype.length; i++){
				if(messagetype[i].type == 'group'){
					var bits = gpiCheck(message[messagetype[i].name],messagetype[i]);
					binString = bits + binString;
				
				}else{
					var bits = fpiCheck(message[messagetype[i].name],messagetype[i]);
					binString = bits + binString;
				}
			}
			return binString;
		}
		var message;
		if(this._headermessage == messagetype){
			message = toByteArray(write(this.header, messagetype.items));
		}else{
			message = toByteArray(write(this.message, messagetype.items));
		}
		this.messageLength = message.length;
		return message;
	}
}