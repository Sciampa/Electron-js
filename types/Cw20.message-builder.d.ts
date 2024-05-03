/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Logo, ExecuteMsg, Expiration, QueryMsg } from "./Cw20.types";
export declare abstract class Cw20ExecuteMsgBuilder {
    static transfer: ({ amount, recipient }: CamelCasedProperties<{
        amount: string;
        recipient: string;
    }>) => ExecuteMsg;
    static burn: ({ amount }: CamelCasedProperties<{
        amount: string;
    }>) => ExecuteMsg;
    static send: ({ amount, contract, msg }: CamelCasedProperties<{
        amount: string;
        contract: string;
        msg: string;
    }>) => ExecuteMsg;
    static increaseAllowance: ({ amount, expires, spender }: CamelCasedProperties<{
        amount: string;
        expires?: Expiration | null | undefined;
        spender: string;
    }>) => ExecuteMsg;
    static decreaseAllowance: ({ amount, expires, spender }: CamelCasedProperties<{
        amount: string;
        expires?: Expiration | null | undefined;
        spender: string;
    }>) => ExecuteMsg;
    static transferFrom: ({ amount, owner, recipient }: CamelCasedProperties<{
        amount: string;
        owner: string;
        recipient: string;
    }>) => ExecuteMsg;
    static sendFrom: ({ amount, contract, msg, owner }: CamelCasedProperties<{
        amount: string;
        contract: string;
        msg: string;
        owner: string;
    }>) => ExecuteMsg;
    static burnFrom: ({ amount, owner }: CamelCasedProperties<{
        amount: string;
        owner: string;
    }>) => ExecuteMsg;
    static mint: ({ amount, recipient }: CamelCasedProperties<{
        amount: string;
        recipient: string;
    }>) => ExecuteMsg;
    static updateMinter: ({ newMinter }: CamelCasedProperties<{
        new_minter?: string | null | undefined;
    }>) => ExecuteMsg;
    static updateMarketing: ({ description, marketing, project }: CamelCasedProperties<{
        description?: string | null | undefined;
        marketing?: string | null | undefined;
        project?: string | null | undefined;
    }>) => ExecuteMsg;
    static uploadLogo: (logo: Logo) => ExecuteMsg;
}
export declare abstract class Cw20QueryMsgBuilder {
    static balance: ({ address }: CamelCasedProperties<{
        address: string;
    }>) => QueryMsg;
    static tokenInfo: () => QueryMsg;
    static minter: () => QueryMsg;
    static allowance: ({ owner, spender }: CamelCasedProperties<{
        owner: string;
        spender: string;
    }>) => QueryMsg;
    static allAllowances: ({ limit, owner, startAfter }: CamelCasedProperties<{
        limit?: number | null | undefined;
        owner: string;
        start_after?: string | null | undefined;
    }>) => QueryMsg;
    static allSpenderAllowances: ({ limit, spender, startAfter }: CamelCasedProperties<{
        limit?: number | null | undefined;
        spender: string;
        start_after?: string | null | undefined;
    }>) => QueryMsg;
    static allAccounts: ({ limit, startAfter }: CamelCasedProperties<{
        limit?: number | null | undefined;
        start_after?: string | null | undefined;
    }>) => QueryMsg;
    static marketingInfo: () => QueryMsg;
    static downloadLogo: () => QueryMsg;
}