# vmf-parser
Library for parsing and writing Variable Message Format (VMF) in JavaScript.

## Introduction

This library is able to read and write to Variable Message Format using pure javascript. Header information according to **MIL-STD-2045 47001D** can be read using built in functionality and messages according to **MIL-STD-6017** can be read if message type objects are provided.

To read and write coordinates in messages, you can use my library [latlng-uint](https://github.com/spatialillusions/latlng-uint).

### Limitations

Since **MIL-STD-6017** currently is under limited distribution message type objects for messages described in this standard cannot be provided with the library, they are however quite easy to create using the header message type as a template.

-

## Main Class VMF

Create a new message object by calling the main class with or without a byte array.

`var message = new VMF([binary])`

### readHeader()
Reads the header from the object binary and returns a header object containing the information.

### readMessage(message type)
Reads a message from the object binary using the provided message type object and returns a message object containing the information.

### setBinary(binary)
Sets the binary for the VMF object.

### setHeader(header object)
Sets the header of the VMF object to the provided message object.

### setMessage(message object)
Sets the message of the VMF object to the provided message object.

### writeHeaderToBinary()
Writes the current header object to binary and returns a Uint8Array containing the information.

### writeMessageToBinary(message type)
Writes the current message object to binary using the provided message type object and returns a Uint8Array containing the information.

## License and Contact
The library is developed by Måns Beckman, www.spatialillusions.com, and is provided under a MIT License.
