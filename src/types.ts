export interface FlowForgeConfig { baseUrl?: string; apiKey: string; }

export interface Workflow {
  id: string; name: string; description?: string; status: "DRAFT" | "ACTIVE" | "SUSPENDED"; version: number; tenantId: string; createdAt: string;
}

export interface WorkflowInstance {
  id: string; workflowId: string; status: "RUNNING" | "COMPLETED" | "FAILED"; variables?: Record<string, any>; startedAt: string;
}

export interface Task {
  id: string; name: string; type: string; status: "PENDING" | "ASSIGNED" | "COMPLETED" | "FAILED"; assignee?: string; inputData?: Record<string, any>; outputData?: Record<string, any>;
}
