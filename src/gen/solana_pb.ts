// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file solana.proto (package sf.solana.type.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message as Message$1 } from "@bufbuild/protobuf";

/**
 * Describes the file solana.proto.
 */
export const file_solana: GenFile = /*@__PURE__*/
  fileDesc("Cgxzb2xhbmEucHJvdG8SEXNmLnNvbGFuYS50eXBlLnYxIrACCgVCbG9jaxIaChJwcmV2aW91c19ibG9ja2hhc2gYASABKAkSEQoJYmxvY2toYXNoGAIgASgJEhMKC3BhcmVudF9zbG90GAMgASgEEj0KDHRyYW5zYWN0aW9ucxgEIAMoCzInLnNmLnNvbGFuYS50eXBlLnYxLkNvbmZpcm1lZFRyYW5zYWN0aW9uEioKB3Jld2FyZHMYBSADKAsyGS5zZi5zb2xhbmEudHlwZS52MS5SZXdhcmQSNAoKYmxvY2tfdGltZRgGIAEoCzIgLnNmLnNvbGFuYS50eXBlLnYxLlVuaXhUaW1lc3RhbXASNAoMYmxvY2tfaGVpZ2h0GAcgASgLMh4uc2Yuc29sYW5hLnR5cGUudjEuQmxvY2tIZWlnaHQSDAoEc2xvdBgUIAEoBCKDAQoUQ29uZmlybWVkVHJhbnNhY3Rpb24SMwoLdHJhbnNhY3Rpb24YASABKAsyHi5zZi5zb2xhbmEudHlwZS52MS5UcmFuc2FjdGlvbhI2CgRtZXRhGAIgASgLMiguc2Yuc29sYW5hLnR5cGUudjEuVHJhbnNhY3Rpb25TdGF0dXNNZXRhIk4KC1RyYW5zYWN0aW9uEhIKCnNpZ25hdHVyZXMYASADKAwSKwoHbWVzc2FnZRgCIAEoCzIaLnNmLnNvbGFuYS50eXBlLnYxLk1lc3NhZ2UiiQIKB01lc3NhZ2USMAoGaGVhZGVyGAEgASgLMiAuc2Yuc29sYW5hLnR5cGUudjEuTWVzc2FnZUhlYWRlchIUCgxhY2NvdW50X2tleXMYAiADKAwSGAoQcmVjZW50X2Jsb2NraGFzaBgDIAEoDBI8CgxpbnN0cnVjdGlvbnMYBCADKAsyJi5zZi5zb2xhbmEudHlwZS52MS5Db21waWxlZEluc3RydWN0aW9uEhEKCXZlcnNpb25lZBgFIAEoCBJLChVhZGRyZXNzX3RhYmxlX2xvb2t1cHMYBiADKAsyLC5zZi5zb2xhbmEudHlwZS52MS5NZXNzYWdlQWRkcmVzc1RhYmxlTG9va3VwIn4KDU1lc3NhZ2VIZWFkZXISHwoXbnVtX3JlcXVpcmVkX3NpZ25hdHVyZXMYASABKA0SJAocbnVtX3JlYWRvbmx5X3NpZ25lZF9hY2NvdW50cxgCIAEoDRImCh5udW1fcmVhZG9ubHlfdW5zaWduZWRfYWNjb3VudHMYAyABKA0iZAoZTWVzc2FnZUFkZHJlc3NUYWJsZUxvb2t1cBITCgthY2NvdW50X2tleRgBIAEoDBIYChB3cml0YWJsZV9pbmRleGVzGAIgASgMEhgKEHJlYWRvbmx5X2luZGV4ZXMYAyABKAwivAQKFVRyYW5zYWN0aW9uU3RhdHVzTWV0YRIwCgNlcnIYASABKAsyIy5zZi5zb2xhbmEudHlwZS52MS5UcmFuc2FjdGlvbkVycm9yEgsKA2ZlZRgCIAEoBBIUCgxwcmVfYmFsYW5jZXMYAyADKAQSFQoNcG9zdF9iYWxhbmNlcxgEIAMoBBJAChJpbm5lcl9pbnN0cnVjdGlvbnMYBSADKAsyJC5zZi5zb2xhbmEudHlwZS52MS5Jbm5lckluc3RydWN0aW9ucxIUCgxsb2dfbWVzc2FnZXMYBiADKAkSOwoScHJlX3Rva2VuX2JhbGFuY2VzGAcgAygLMh8uc2Yuc29sYW5hLnR5cGUudjEuVG9rZW5CYWxhbmNlEjwKE3Bvc3RfdG9rZW5fYmFsYW5jZXMYCCADKAsyHy5zZi5zb2xhbmEudHlwZS52MS5Ub2tlbkJhbGFuY2USKgoHcmV3YXJkcxgJIAMoCzIZLnNmLnNvbGFuYS50eXBlLnYxLlJld2FyZBIhChlsb2FkZWRfd3JpdGFibGVfYWRkcmVzc2VzGAwgAygMEiEKGWxvYWRlZF9yZWFkb25seV9hZGRyZXNzZXMYDSADKAwSMgoLcmV0dXJuX2RhdGEYDiABKAsyHS5zZi5zb2xhbmEudHlwZS52MS5SZXR1cm5EYXRhEiMKFmNvbXB1dGVfdW5pdHNfY29uc3VtZWQYECABKARIAIgBAUIZChdfY29tcHV0ZV91bml0c19jb25zdW1lZCIfChBUcmFuc2FjdGlvbkVycm9yEgsKA2VychgBIAEoDCJdChFJbm5lckluc3RydWN0aW9ucxINCgVpbmRleBgBIAEoDRI5CgxpbnN0cnVjdGlvbnMYAiADKAsyIy5zZi5zb2xhbmEudHlwZS52MS5Jbm5lckluc3RydWN0aW9uIngKEElubmVySW5zdHJ1Y3Rpb24SGAoQcHJvZ3JhbV9pZF9pbmRleBgBIAEoDRIQCghhY2NvdW50cxgCIAEoDBIMCgRkYXRhGAMgASgMEhkKDHN0YWNrX2hlaWdodBgEIAEoDUgAiAEBQg8KDV9zdGFja19oZWlnaHQiTwoTQ29tcGlsZWRJbnN0cnVjdGlvbhIYChBwcm9ncmFtX2lkX2luZGV4GAEgASgNEhAKCGFjY291bnRzGAIgASgMEgwKBGRhdGEYAyABKAwikQEKDFRva2VuQmFsYW5jZRIVCg1hY2NvdW50X2luZGV4GAEgASgNEgwKBG1pbnQYAiABKAkSOQoPdWlfdG9rZW5fYW1vdW50GAMgASgLMiAuc2Yuc29sYW5hLnR5cGUudjEuVWlUb2tlbkFtb3VudBINCgVvd25lchgEIAEoCRISCgpwcm9ncmFtX2lkGAUgASgJIl4KDVVpVG9rZW5BbW91bnQSEQoJdWlfYW1vdW50GAEgASgBEhAKCGRlY2ltYWxzGAIgASgNEg4KBmFtb3VudBgDIAEoCRIYChB1aV9hbW91bnRfc3RyaW5nGAQgASgJIi4KClJldHVybkRhdGESEgoKcHJvZ3JhbV9pZBgBIAEoDBIMCgRkYXRhGAIgASgMIogBCgZSZXdhcmQSDgoGcHVia2V5GAEgASgJEhAKCGxhbXBvcnRzGAIgASgDEhQKDHBvc3RfYmFsYW5jZRgDIAEoBBIyCgtyZXdhcmRfdHlwZRgEIAEoDjIdLnNmLnNvbGFuYS50eXBlLnYxLlJld2FyZFR5cGUSEgoKY29tbWlzc2lvbhgFIAEoCSI1CgdSZXdhcmRzEioKB3Jld2FyZHMYASADKAsyGS5zZi5zb2xhbmEudHlwZS52MS5SZXdhcmQiIgoNVW5peFRpbWVzdGFtcBIRCgl0aW1lc3RhbXAYASABKAMiIwoLQmxvY2tIZWlnaHQSFAoMYmxvY2tfaGVpZ2h0GAEgASgEKkkKClJld2FyZFR5cGUSDwoLVW5zcGVjaWZpZWQQABIHCgNGZWUQARIICgRSZW50EAISCwoHU3Rha2luZxADEgoKBlZvdGluZxAEQkVaQ2dpdGh1Yi5jb20vc3RyZWFtaW5nZmFzdC9maXJlaG9zZS1zb2xhbmEvcGIvc2Yvc29sYW5hL3R5cGUvdjE7cGJzb2xiBnByb3RvMw");

/**
 * This Block is backwards compatible with solana.storage.ConfirmedBlock.ConfirmedBlock from
 * the Solana Labs repositories.
 *
 * @generated from message sf.solana.type.v1.Block
 */
export type Block = Message$1<"sf.solana.type.v1.Block"> & {
  /**
   * @generated from field: string previous_blockhash = 1;
   */
  previousBlockhash: string;

  /**
   * @generated from field: string blockhash = 2;
   */
  blockhash: string;

  /**
   * @generated from field: uint64 parent_slot = 3;
   */
  parentSlot: bigint;

  /**
   * @generated from field: repeated sf.solana.type.v1.ConfirmedTransaction transactions = 4;
   */
  transactions: ConfirmedTransaction[];

  /**
   * @generated from field: repeated sf.solana.type.v1.Reward rewards = 5;
   */
  rewards: Reward[];

  /**
   * @generated from field: sf.solana.type.v1.UnixTimestamp block_time = 6;
   */
  blockTime?: UnixTimestamp;

  /**
   * @generated from field: sf.solana.type.v1.BlockHeight block_height = 7;
   */
  blockHeight?: BlockHeight;

  /**
   * StreamingFast additions
   *
   * @generated from field: uint64 slot = 20;
   */
  slot: bigint;
};

/**
 * Describes the message sf.solana.type.v1.Block.
 * Use `create(BlockSchema)` to create a new message.
 */
export const BlockSchema: GenMessage<Block> = /*@__PURE__*/
  messageDesc(file_solana, 0);

/**
 * @generated from message sf.solana.type.v1.ConfirmedTransaction
 */
export type ConfirmedTransaction = Message$1<"sf.solana.type.v1.ConfirmedTransaction"> & {
  /**
   * @generated from field: sf.solana.type.v1.Transaction transaction = 1;
   */
  transaction?: Transaction;

  /**
   * @generated from field: sf.solana.type.v1.TransactionStatusMeta meta = 2;
   */
  meta?: TransactionStatusMeta;
};

/**
 * Describes the message sf.solana.type.v1.ConfirmedTransaction.
 * Use `create(ConfirmedTransactionSchema)` to create a new message.
 */
export const ConfirmedTransactionSchema: GenMessage<ConfirmedTransaction> = /*@__PURE__*/
  messageDesc(file_solana, 1);

/**
 * @generated from message sf.solana.type.v1.Transaction
 */
export type Transaction = Message$1<"sf.solana.type.v1.Transaction"> & {
  /**
   * @generated from field: repeated bytes signatures = 1;
   */
  signatures: Uint8Array[];

  /**
   * @generated from field: sf.solana.type.v1.Message message = 2;
   */
  message?: Message;
};

/**
 * Describes the message sf.solana.type.v1.Transaction.
 * Use `create(TransactionSchema)` to create a new message.
 */
export const TransactionSchema: GenMessage<Transaction> = /*@__PURE__*/
  messageDesc(file_solana, 2);

/**
 * @generated from message sf.solana.type.v1.Message
 */
export type Message = Message$1<"sf.solana.type.v1.Message"> & {
  /**
   * @generated from field: sf.solana.type.v1.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: repeated bytes account_keys = 2;
   */
  accountKeys: Uint8Array[];

  /**
   * @generated from field: bytes recent_blockhash = 3;
   */
  recentBlockhash: Uint8Array;

  /**
   * Top-level instructions
   * T instructions (?)
   *
   * @generated from field: repeated sf.solana.type.v1.CompiledInstruction instructions = 4;
   */
  instructions: CompiledInstruction[];

  /**
   * @generated from field: bool versioned = 5;
   */
  versioned: boolean;

  /**
   * @generated from field: repeated sf.solana.type.v1.MessageAddressTableLookup address_table_lookups = 6;
   */
  addressTableLookups: MessageAddressTableLookup[];
};

/**
 * Describes the message sf.solana.type.v1.Message.
 * Use `create(MessageSchema)` to create a new message.
 */
export const MessageSchema: GenMessage<Message> = /*@__PURE__*/
  messageDesc(file_solana, 3);

/**
 * @generated from message sf.solana.type.v1.MessageHeader
 */
export type MessageHeader = Message$1<"sf.solana.type.v1.MessageHeader"> & {
  /**
   * @generated from field: uint32 num_required_signatures = 1;
   */
  numRequiredSignatures: number;

  /**
   * @generated from field: uint32 num_readonly_signed_accounts = 2;
   */
  numReadonlySignedAccounts: number;

  /**
   * @generated from field: uint32 num_readonly_unsigned_accounts = 3;
   */
  numReadonlyUnsignedAccounts: number;
};

/**
 * Describes the message sf.solana.type.v1.MessageHeader.
 * Use `create(MessageHeaderSchema)` to create a new message.
 */
export const MessageHeaderSchema: GenMessage<MessageHeader> = /*@__PURE__*/
  messageDesc(file_solana, 4);

/**
 * @generated from message sf.solana.type.v1.MessageAddressTableLookup
 */
export type MessageAddressTableLookup = Message$1<"sf.solana.type.v1.MessageAddressTableLookup"> & {
  /**
   * @generated from field: bytes account_key = 1;
   */
  accountKey: Uint8Array;

  /**
   * @generated from field: bytes writable_indexes = 2;
   */
  writableIndexes: Uint8Array;

  /**
   * @generated from field: bytes readonly_indexes = 3;
   */
  readonlyIndexes: Uint8Array;
};

/**
 * Describes the message sf.solana.type.v1.MessageAddressTableLookup.
 * Use `create(MessageAddressTableLookupSchema)` to create a new message.
 */
export const MessageAddressTableLookupSchema: GenMessage<MessageAddressTableLookup> = /*@__PURE__*/
  messageDesc(file_solana, 5);

/**
 * @generated from message sf.solana.type.v1.TransactionStatusMeta
 */
export type TransactionStatusMeta = Message$1<"sf.solana.type.v1.TransactionStatusMeta"> & {
  /**
   * @generated from field: sf.solana.type.v1.TransactionError err = 1;
   */
  err?: TransactionError;

  /**
   * @generated from field: uint64 fee = 2;
   */
  fee: bigint;

  /**
   * @generated from field: repeated uint64 pre_balances = 3;
   */
  preBalances: bigint[];

  /**
   * @generated from field: repeated uint64 post_balances = 4;
   */
  postBalances: bigint[];

  /**
   * InnerInstructions are instructions made to external programs as part of the transaction.
   *
   * Count == len(I)
   *
   * @generated from field: repeated sf.solana.type.v1.InnerInstructions inner_instructions = 5;
   */
  innerInstructions: InnerInstructions[];

  /**
   *    bool inner_instructions_none = 10;
   *
   * @generated from field: repeated string log_messages = 6;
   */
  logMessages: string[];

  /**
   *    bool log_messages_none = 11;
   *
   * @generated from field: repeated sf.solana.type.v1.TokenBalance pre_token_balances = 7;
   */
  preTokenBalances: TokenBalance[];

  /**
   * @generated from field: repeated sf.solana.type.v1.TokenBalance post_token_balances = 8;
   */
  postTokenBalances: TokenBalance[];

  /**
   * @generated from field: repeated sf.solana.type.v1.Reward rewards = 9;
   */
  rewards: Reward[];

  /**
   * @generated from field: repeated bytes loaded_writable_addresses = 12;
   */
  loadedWritableAddresses: Uint8Array[];

  /**
   * @generated from field: repeated bytes loaded_readonly_addresses = 13;
   */
  loadedReadonlyAddresses: Uint8Array[];

  /**
   *    bool return_data_none = 15;
   *
   * @generated from field: sf.solana.type.v1.ReturnData return_data = 14;
   */
  returnData?: ReturnData;

  /**
   * Sum of compute units consumed by all instructions.
   * Available since Solana v1.10.35 / v1.11.6.
   * Set to `None` for txs executed on earlier versions.
   *
   * @generated from field: optional uint64 compute_units_consumed = 16;
   */
  computeUnitsConsumed?: bigint;
};

/**
 * Describes the message sf.solana.type.v1.TransactionStatusMeta.
 * Use `create(TransactionStatusMetaSchema)` to create a new message.
 */
export const TransactionStatusMetaSchema: GenMessage<TransactionStatusMeta> = /*@__PURE__*/
  messageDesc(file_solana, 6);

/**
 * @generated from message sf.solana.type.v1.TransactionError
 */
export type TransactionError = Message$1<"sf.solana.type.v1.TransactionError"> & {
  /**
   * @generated from field: bytes err = 1;
   */
  err: Uint8Array;
};

/**
 * Describes the message sf.solana.type.v1.TransactionError.
 * Use `create(TransactionErrorSchema)` to create a new message.
 */
export const TransactionErrorSchema: GenMessage<TransactionError> = /*@__PURE__*/
  messageDesc(file_solana, 7);

/**
 * @generated from message sf.solana.type.v1.InnerInstructions
 */
export type InnerInstructions = Message$1<"sf.solana.type.v1.InnerInstructions"> & {
  /**
   * @generated from field: uint32 index = 1;
   */
  index: number;

  /**
   * @generated from field: repeated sf.solana.type.v1.InnerInstruction instructions = 2;
   */
  instructions: InnerInstruction[];
};

/**
 * Describes the message sf.solana.type.v1.InnerInstructions.
 * Use `create(InnerInstructionsSchema)` to create a new message.
 */
export const InnerInstructionsSchema: GenMessage<InnerInstructions> = /*@__PURE__*/
  messageDesc(file_solana, 8);

/**
 * @generated from message sf.solana.type.v1.InnerInstruction
 */
export type InnerInstruction = Message$1<"sf.solana.type.v1.InnerInstruction"> & {
  /**
   * @generated from field: uint32 program_id_index = 1;
   */
  programIdIndex: number;

  /**
   * @generated from field: bytes accounts = 2;
   */
  accounts: Uint8Array;

  /**
   * @generated from field: bytes data = 3;
   */
  data: Uint8Array;

  /**
   * Invocation stack height of an inner instruction.
   * Available since Solana v1.14.6
   * Set to `None` for txs executed on earlier versions.
   *
   * @generated from field: optional uint32 stack_height = 4;
   */
  stackHeight?: number;
};

/**
 * Describes the message sf.solana.type.v1.InnerInstruction.
 * Use `create(InnerInstructionSchema)` to create a new message.
 */
export const InnerInstructionSchema: GenMessage<InnerInstruction> = /*@__PURE__*/
  messageDesc(file_solana, 9);

/**
 * @generated from message sf.solana.type.v1.CompiledInstruction
 */
export type CompiledInstruction = Message$1<"sf.solana.type.v1.CompiledInstruction"> & {
  /**
   * @generated from field: uint32 program_id_index = 1;
   */
  programIdIndex: number;

  /**
   * @generated from field: bytes accounts = 2;
   */
  accounts: Uint8Array;

  /**
   * @generated from field: bytes data = 3;
   */
  data: Uint8Array;
};

/**
 * Describes the message sf.solana.type.v1.CompiledInstruction.
 * Use `create(CompiledInstructionSchema)` to create a new message.
 */
export const CompiledInstructionSchema: GenMessage<CompiledInstruction> = /*@__PURE__*/
  messageDesc(file_solana, 10);

/**
 * @generated from message sf.solana.type.v1.TokenBalance
 */
export type TokenBalance = Message$1<"sf.solana.type.v1.TokenBalance"> & {
  /**
   * @generated from field: uint32 account_index = 1;
   */
  accountIndex: number;

  /**
   * @generated from field: string mint = 2;
   */
  mint: string;

  /**
   * @generated from field: sf.solana.type.v1.UiTokenAmount ui_token_amount = 3;
   */
  uiTokenAmount?: UiTokenAmount;

  /**
   * @generated from field: string owner = 4;
   */
  owner: string;

  /**
   * @generated from field: string program_id = 5;
   */
  programId: string;
};

/**
 * Describes the message sf.solana.type.v1.TokenBalance.
 * Use `create(TokenBalanceSchema)` to create a new message.
 */
export const TokenBalanceSchema: GenMessage<TokenBalance> = /*@__PURE__*/
  messageDesc(file_solana, 11);

/**
 * @generated from message sf.solana.type.v1.UiTokenAmount
 */
export type UiTokenAmount = Message$1<"sf.solana.type.v1.UiTokenAmount"> & {
  /**
   * @generated from field: double ui_amount = 1;
   */
  uiAmount: number;

  /**
   * @generated from field: uint32 decimals = 2;
   */
  decimals: number;

  /**
   * @generated from field: string amount = 3;
   */
  amount: string;

  /**
   * @generated from field: string ui_amount_string = 4;
   */
  uiAmountString: string;
};

/**
 * Describes the message sf.solana.type.v1.UiTokenAmount.
 * Use `create(UiTokenAmountSchema)` to create a new message.
 */
export const UiTokenAmountSchema: GenMessage<UiTokenAmount> = /*@__PURE__*/
  messageDesc(file_solana, 12);

/**
 * @generated from message sf.solana.type.v1.ReturnData
 */
export type ReturnData = Message$1<"sf.solana.type.v1.ReturnData"> & {
  /**
   * @generated from field: bytes program_id = 1;
   */
  programId: Uint8Array;

  /**
   * @generated from field: bytes data = 2;
   */
  data: Uint8Array;
};

/**
 * Describes the message sf.solana.type.v1.ReturnData.
 * Use `create(ReturnDataSchema)` to create a new message.
 */
export const ReturnDataSchema: GenMessage<ReturnData> = /*@__PURE__*/
  messageDesc(file_solana, 13);

/**
 * @generated from message sf.solana.type.v1.Reward
 */
export type Reward = Message$1<"sf.solana.type.v1.Reward"> & {
  /**
   * @generated from field: string pubkey = 1;
   */
  pubkey: string;

  /**
   * @generated from field: int64 lamports = 2;
   */
  lamports: bigint;

  /**
   * @generated from field: uint64 post_balance = 3;
   */
  postBalance: bigint;

  /**
   * @generated from field: sf.solana.type.v1.RewardType reward_type = 4;
   */
  rewardType: RewardType;

  /**
   * @generated from field: string commission = 5;
   */
  commission: string;
};

/**
 * Describes the message sf.solana.type.v1.Reward.
 * Use `create(RewardSchema)` to create a new message.
 */
export const RewardSchema: GenMessage<Reward> = /*@__PURE__*/
  messageDesc(file_solana, 14);

/**
 * @generated from message sf.solana.type.v1.Rewards
 */
export type Rewards = Message$1<"sf.solana.type.v1.Rewards"> & {
  /**
   * @generated from field: repeated sf.solana.type.v1.Reward rewards = 1;
   */
  rewards: Reward[];
};

/**
 * Describes the message sf.solana.type.v1.Rewards.
 * Use `create(RewardsSchema)` to create a new message.
 */
export const RewardsSchema: GenMessage<Rewards> = /*@__PURE__*/
  messageDesc(file_solana, 15);

/**
 * @generated from message sf.solana.type.v1.UnixTimestamp
 */
export type UnixTimestamp = Message$1<"sf.solana.type.v1.UnixTimestamp"> & {
  /**
   * @generated from field: int64 timestamp = 1;
   */
  timestamp: bigint;
};

/**
 * Describes the message sf.solana.type.v1.UnixTimestamp.
 * Use `create(UnixTimestampSchema)` to create a new message.
 */
export const UnixTimestampSchema: GenMessage<UnixTimestamp> = /*@__PURE__*/
  messageDesc(file_solana, 16);

/**
 * @generated from message sf.solana.type.v1.BlockHeight
 */
export type BlockHeight = Message$1<"sf.solana.type.v1.BlockHeight"> & {
  /**
   * @generated from field: uint64 block_height = 1;
   */
  blockHeight: bigint;
};

/**
 * Describes the message sf.solana.type.v1.BlockHeight.
 * Use `create(BlockHeightSchema)` to create a new message.
 */
export const BlockHeightSchema: GenMessage<BlockHeight> = /*@__PURE__*/
  messageDesc(file_solana, 17);

/**
 * @generated from enum sf.solana.type.v1.RewardType
 */
export enum RewardType {
  /**
   * @generated from enum value: Unspecified = 0;
   */
  Unspecified = 0,

  /**
   * @generated from enum value: Fee = 1;
   */
  Fee = 1,

  /**
   * @generated from enum value: Rent = 2;
   */
  Rent = 2,

  /**
   * @generated from enum value: Staking = 3;
   */
  Staking = 3,

  /**
   * @generated from enum value: Voting = 4;
   */
  Voting = 4,
}

/**
 * Describes the enum sf.solana.type.v1.RewardType.
 */
export const RewardTypeSchema: GenEnum<RewardType> = /*@__PURE__*/
  enumDesc(file_solana, 0);
