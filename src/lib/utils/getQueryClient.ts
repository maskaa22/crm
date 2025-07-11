import { QueryClient } from "@tanstack/react-query";
import { cache } from 'react';

const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;
export default getQueryClient;
