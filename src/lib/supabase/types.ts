export type Plan = "free" | "pro";

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          clerk_id: string;
          plan: Plan;
          created_at: string;
          email: string | null;
        };
        Insert: {
          id?: string;
          clerk_id: string;
          plan?: Plan;
          created_at?: string;
          email?: string | null;
        };
        Update: { plan?: Plan; email?: string | null };
        Relationships: [];
      };
      projects: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          canvas_json: string;
          preview_url: string | null;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          canvas_json: string;
          preview_url?: string | null;
          updated_at?: string;
        };
        Update: {
          title?: string;
          canvas_json?: string;
          preview_url?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      brand_kits: {
        Row: {
          id: string;
          user_id: string;
          logo_url: string | null;
          colors: string[];
          fonts: string[];
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          logo_url?: string | null;
          colors?: string[];
          fonts?: string[];
          updated_at?: string;
        };
        Update: {
          logo_url?: string | null;
          colors?: string[];
          fonts?: string[];
          updated_at?: string;
        };
        Relationships: [];
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          status: "active" | "cancelled" | "expired";
          plan: Plan;
          expires_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          status: "active" | "cancelled" | "expired";
          plan: Plan;
          expires_at?: string | null;
        };
        Update: {
          status?: "active" | "cancelled" | "expired";
          expires_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};
