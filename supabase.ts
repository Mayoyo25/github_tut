export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          avatar_url: string | null
          email: string
          full_name: string | null
          id: string
          is_licensed: boolean
          license_key: string | null
          login_session: string | null
        }
        Insert: {
          avatar_url?: string | null
          email: string
          full_name?: string | null
          id: string
          is_licensed?: boolean
          license_key?: string | null
          login_session?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_licensed?: boolean
          license_key?: string | null
          login_session?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_v2: {
        Row: {
          avatar_url: string | null
          email: string
          full_name: string | null
          id: string
          is_licensed: boolean
          license_key: string | null
          login_session: string | null
        }
        Insert: {
          avatar_url?: string | null
          email: string
          full_name?: string | null
          id: string
          is_licensed?: boolean
          license_key?: string | null
          login_session?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_licensed?: boolean
          license_key?: string | null
          login_session?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_v2_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      continents:
        | "Africa"
        | "Antarctica"
        | "Asia"
        | "Europe"
        | "Oceania"
        | "North America"
        | "South America"
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
