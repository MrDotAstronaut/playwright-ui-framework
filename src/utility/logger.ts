const logger: string = process.env.LOGGER ?? 'N';
export function log(message) {
    if (logger === 'Y') {
      console.log(message);
    }
}