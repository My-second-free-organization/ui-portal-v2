import axios, { AxiosInstance } from "axios";
import type { FlowForgeConfig, Workflow, Task, WorkflowInstance } from "./types";

export class FlowForgeClient {
  private http: AxiosInstance;

  constructor(config: FlowForgeConfig) {
    this.http = axios.create({
      baseURL: config.baseUrl || "https://api.flowforge.io",
      headers: { Authorization: `Bearer ${config.apiKey}`, "Content-Type": "application/json" },
    });
  }

  async listWorkflows(tenantId: string): Promise<Workflow[]> {
    const { data } = await this.http.get("/api/v1/workflows", { params: { tenantId } });
    return data.content;
  }

  async getWorkflow(id: string): Promise<Workflow> {
    const { data } = await this.http.get(`/api/v1/workflows/${id}`);
    return data;
  }

  async createWorkflow(workflow: Partial<Workflow>): Promise<Workflow> {
    const { data } = await this.http.post("/api/v1/workflows", workflow);
    return data;
  }

  async startWorkflow(id: string, variables?: Record<string, any>): Promise<WorkflowInstance> {
    const { data } = await this.http.post(`/api/v1/workflows/${id}/start`, { variables });
    return data;
  }

  async getTask(id: string): Promise<Task> {
    const { data } = await this.http.get(`/api/v1/tasks/${id}`);
    return data;
  }

  async completeTask(id: string, output: Record<string, any>): Promise<Task> {
    const { data } = await this.http.post(`/api/v1/tasks/${id}/complete`, output);
    return data;
  }
}
