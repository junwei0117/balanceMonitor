export const bank1Address = '0x180893a0ec847fa8c92786791348d7d65916acbb';
export const bank2Address = '0xf9a2cb34b6b5fd7a2ac0c2e9b2b9406d6daffbd4';
export const bank3Address = '0xc8f717ba9593dc9d45c4518cf444d2cbd08af24d';

export const  abi = [
  {
     constant: false,
     inputs: [
        {
           name: '_transactionID',
           type: 'bytes32',
        },
     ],
     name: 'confirmTransactionRegulator',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     constant: false,
     inputs: [
        {
           name: '_seconds',
           type: 'uint256',
        },
     ],
     name: 'setConfirmationTime',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     constant: false,
     inputs: [
        {
           name: '_value',
           type: 'uint256',
        },
        {
           name: '_random',
           type: 'string',
        },
     ],
     name: 'receiveValue',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     constant: false,
     inputs: [
        {
           name: '_transactionID',
           type: 'bytes32',
        },
     ],
     name: 'confirmTransactionBank',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     constant: true,
     inputs: [
        {
           name: '',
           type: 'bytes32',
        },
     ],
     name: 'transactions',
     outputs: [
        {
           name: 'value',
           type: 'uint256',
        },
        {
           name: 'senderContract',
           type: 'address',
        },
        {
           name: 'destinationContract',
           type: 'address',
        },
        {
           name: 'confirmed',
           type: 'bool',
        },
        {
           name: 'senderBalanceAtTransfer',
           type: 'uint256',
        },
     ],
     payable: false,
     stateMutability: 'view',
     type: 'function',
  },
  {
     constant: true,
     inputs: [

     ],
     name: 'confirmationTime',
     outputs: [
        {
           name: '',
           type: 'uint256',
        },
     ],
     payable: false,
     stateMutability: 'view',
     type: 'function',
  },
  {
     constant: false,
     inputs: [
        {
           name: '_contractAddress',
           type: 'address',
        },
     ],
     name: 'setTransactionListAddress',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     constant: true,
     inputs: [

     ],
     name: 'isRegulatorNode',
     outputs: [
        {
           name: '',
           type: 'bool',
        },
     ],
     payable: false,
     stateMutability: 'view',
     type: 'function',
  },
  {
     constant: true,
     inputs: [

     ],
     name: 'TransactionListAddress',
     outputs: [
        {
           name: '',
           type: 'address',
        },
     ],
     payable: false,
     stateMutability: 'view',
     type: 'function',
  },
  {
     constant: true,
     inputs: [

     ],
     name: 'thisBankContract',
     outputs: [
        {
           name: '',
           type: 'address',
        },
     ],
     payable: false,
     stateMutability: 'view',
     type: 'function',
  },
  {
     constant: false,
     inputs: [
        {
           name: '_thisBankContract',
           type: 'address',
        },
     ],
     name: 'setThisBankContract',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     constant: false,
     inputs: [
        {
           name: '_destination',
           type: 'address',
        },
        {
           name: '_value',
           type: 'uint256',
        },
        {
           name: '_random',
           type: 'string',
        },
     ],
     name: 'sendValue',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     constant: false,
     inputs: [

     ],
     name: 'setRegulatorNode',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     constant: false,
     inputs: [
        {
           name: '_transactionID',
           type: 'bytes32',
        },
     ],
     name: 'confirmTransactionPair',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     constant: true,
     inputs: [

     ],
     name: 'balance',
     outputs: [
        {
           name: '',
           type: 'uint256',
        },
     ],
     payable: false,
     stateMutability: 'view',
     type: 'function',
  },
  {
     constant: true,
     inputs: [

     ],
     name: 'totalTransactions',
     outputs: [
        {
           name: '',
           type: 'uint256',
        },
     ],
     payable: false,
     stateMutability: 'view',
     type: 'function',
  },
  {
     constant: true,
     inputs: [
        {
           name: '',
           type: 'uint256',
        },
     ],
     name: 'transactionIDs',
     outputs: [
        {
           name: '',
           type: 'bytes32',
        },
     ],
     payable: false,
     stateMutability: 'view',
     type: 'function',
  },
  {
     constant: true,
     inputs: [

     ],
     name: 'regulator',
     outputs: [
        {
           name: '',
           type: 'address',
        },
     ],
     payable: false,
     stateMutability: 'view',
     type: 'function',
  },
  {
     constant: false,
     inputs: [
        {
           name: '_balance',
           type: 'uint256',
        },
     ],
     name: 'setBalance',
     outputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'function',
  },
  {
     inputs: [

     ],
     payable: false,
     stateMutability: 'nonpayable',
     type: 'constructor',
  },
];
