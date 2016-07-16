# vmf-parser
Library for parsing and writing Variable Message Format (VMF) in JavaScript.

The goal of this library is to be able to read/write headers and messages in VMF. Header information is described in MIL-STD-2045_47001D and follow the same structure as VMF so reading/writing header information will be the first development step. Since the message formats, MIL-STD-6017, currently are under limited distribution only sample code for reading/writing messages will be included.

When the library is working as it should it should make it possible to receive/send binary messages directly from the web browser and facilitate interoperability between systems and require a lot less network traffic then sending the same data as JSON.

The library is developed by Måns Beckman, www.spatialillusions.com
