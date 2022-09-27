interface Query<T> {
    execute(data: T[]): T[],
    validate(): void
}

export default Query