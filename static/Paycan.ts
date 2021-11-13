interface UserArgs{
    id:string
    name:string
}

interface GroupArgs{
    id:string
    name:string
    users:any
}

export class User{
    private _id:string;
    private _name:string;
    
    constructor(props:Required<UserArgs>) {
        this._id = props.id;
        this._name = props.name;
	}


    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

}

export class Group{
    private _id:string;
    private _name:string;
    private _users:any;
    
    constructor(props:Required<GroupArgs>){
        this._id = props.id ?? ''
        this._name = props.name ?? ''
        this._users = props.users ?? {}
    }    

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Getter users
     * @return {string[]}
     */
	public get users(): string[] {
		return this._users;
	}

    /**
     * Setter users
     * @param {string[]} value
     */
	public set users(value: string[]) {
		this._users = value;
	}  
}