import { boolean, decimal, integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { INVOICE_STATUS } from "../data/invoices";
import { INVOICE_ACTIVITYLOGS_STATUS } from "../data/invoices";


  // Priority Enum
  const priorityValues = ['low', 'medium', 'high'] as const;
  export type Priority = typeof priorityValues[number];
  export const priorityEnum = pgEnum('priority', priorityValues);
  
  // Tasks Table
  export const Tasks = pgTable('tasks', {
    id: serial('id').primaryKey().notNull(),
    userId: text('user_id').notNull(),
    title: text('title').notNull(),
    priority: priorityEnum('priority').notNull(),
    dueDate: timestamp('due_date'),
    completed: boolean('completed').default(false).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  });
  export type Task = typeof Tasks.$inferSelect;
  export type NewTask = typeof Tasks.$inferInsert;

// Invoice Status
const statuses = INVOICE_STATUS.map(({ id }) => id ) as Array<Status>;

export type Status = typeof INVOICE_STATUS[number]['id'];

export const statusEnum = pgEnum('status', statuses as [Status, ...Array<Status>])

// Activitylogs Status
const activitystatuses = INVOICE_ACTIVITYLOGS_STATUS.map(({ id }) => id ) as Array<ActivitylogStatus>;

export type ActivitylogStatus = typeof INVOICE_ACTIVITYLOGS_STATUS[number]['id'];

export const activitylogStatusEnum = pgEnum('activity', activitystatuses as [ActivitylogStatus, ...Array<ActivitylogStatus>])

// Client Schema Table
export const Clients = pgTable ('clients', {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id').notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    phone: text('phone').notNull(),
    companyName: text('company_name').notNull(),
    billingAddress: text('billing_address').notNull(),
    notes: text('notes'),
    projectCount: integer('project_count').default(0).notNull(),
    isActive: boolean('is_active').default(true).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

export type Client = typeof Clients.$inferSelect;
export type NewClient = typeof Clients.$inferInsert;

// Invoice Schema Table
export const Invoices = pgTable('invoices', {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id').notNull(),
    clientId: integer('client_id').notNull().references(() => Clients.id),
    description: text('description').notNull(),
    amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
    tax: decimal('tax', { precision: 10, scale: 2 }).default('0'),
    discount: decimal('discount', { precision: 10, scale: 2 }).default('0'),
    status: statusEnum('status').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    dueDate: timestamp('due_date'),

})

export type Invoice = typeof Invoices.$inferSelect;
export type NewInvoice = typeof Invoices.$inferInsert;

// Invoice ActivityLog Schema Table
export const InvoiceActivityLogs = pgTable('invoice_activity_logs', {
    id: serial('id').primaryKey().notNull(),
    invoiceId: integer('invoice_id').notNull().references(() => Invoices.id),
    activityType: activitylogStatusEnum('activity').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true}).defaultNow().notNull(),
})

// Items Schema Table
export const Items = pgTable('items', {
    id: serial('id').primaryKey().notNull(),
    invoiceId: integer('invoice_id').notNull().references(() => Invoices.id),
    name: text('name').notNull(),
    quantity: integer('quantity').default(1).notNull(),
    unitPrice: decimal('unit_price', { precision: 10, scale: 2 }).notNull(),
    subtotal: decimal('subtotal', { precision: 10, scale: 2 }).notNull(),
})