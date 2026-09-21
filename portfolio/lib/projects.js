import { PROJECTS } from "@/config/projects";

export function getProjectBySlug(slug) {
  return PROJECTS.find(function matchSlug(project) {
    return project.slug === slug;
  });
}

export function getProjectSlugs() {
  return PROJECTS.map(function toSlug(project) {
    return project.slug;
  });
}