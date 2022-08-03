export class GeneralUtils {
    static isDev(): boolean {
        return process.env.NODE_ENV === 'development'
    }
}
