// {404, "page not found"}
export class ClientError {
    public status: number;
    public message: string;

    public constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }
}

//"child" client error class
export class RouteNotFound extends ClientError {
    constructor(route: string) {
        super(404, `route ${route} was not found`);
    }
}