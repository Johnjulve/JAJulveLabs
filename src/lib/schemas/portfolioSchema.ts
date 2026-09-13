import { z } from "zod";

export const SkillItemSchema = z.object({
  name: z.string(),
  category: z.enum(["Intrinsic", "Extra", "Ultimate"]),
  iconName: z.string(),
  proficiency: z.number().min(0).max(100),
  description: z.string(),
  tags: z.array(z.string()),
});

export const ProjectMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const ProjectItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  tagline: z.string(),
  classification: z.string(),
  epValue: z.string(),
  description: z.string(),
  architectureHighlights: z.array(z.string()),
  techStack: z.array(z.string()),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  metrics: z.array(ProjectMetricSchema).optional(),
});

export const EvolutionMilestoneSchema = z.object({
  period: z.string(),
  title: z.string(),
  rank: z.string(),
  organization: z.string(),
  description: z.string(),
  achievements: z.array(z.string()),
});

export const ProfileSocialsSchema = z.object({
  github: z.string().url(),
  linkedin: z.string().url(),
  email: z.string().email(),
});

export const ProfileSchema = z.object({
  name: z.string(),
  alias: z.string(),
  title: z.string(),
  rank: z.string(),
  existenceValue: z.string(),
  epProgress: z.number().min(0).max(100),
  status: z.string(),
  location: z.string(),
  tagline: z.string(),
  subheadline: z.string(),
  bio: z.string(),
  socials: ProfileSocialsSchema,
});

export const PortfolioDataSchema = z.object({
  profile: ProfileSchema,
  skills: z.object({
    intrinsic: z.array(SkillItemSchema),
    extra: z.array(SkillItemSchema),
    ultimate: z.array(SkillItemSchema),
  }),
  projects: z.array(ProjectItemSchema),
  evolution: z.array(EvolutionMilestoneSchema),
});

export type SkillItem = z.infer<typeof SkillItemSchema>;
export type ProjectItem = z.infer<typeof ProjectItemSchema>;
export type EvolutionMilestone = z.infer<typeof EvolutionMilestoneSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
export type PortfolioData = z.infer<typeof PortfolioDataSchema>;
