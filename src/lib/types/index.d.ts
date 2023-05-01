type Optional<T> = T | null;

interface UseCase<Input, Output> {
  handle(port?: Input): Promise<Output>;
}
