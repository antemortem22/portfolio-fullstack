using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Models;
using PortfolioModel = Portfolio.Api.Models.Portfolio;

namespace Portfolio.Api.Data;

public partial class PortfolioDbContext : DbContext
{
    public PortfolioDbContext()
    {
    }

    public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<HeroSection> HeroSections { get; set; }

    public virtual DbSet<PortfolioModel> Portfolios { get; set; }

    public virtual DbSet<Profile> Profiles { get; set; }

    public virtual DbSet<Project> Projects { get; set; }

    public virtual DbSet<ProjectTag> ProjectTags { get; set; }

    public virtual DbSet<Skill> Skills { get; set; }

    public virtual DbSet<SkillCategory> SkillCategories { get; set; }

    public virtual DbSet<SocialLink> SocialLinks { get; set; }

    public virtual DbSet<Tool> Tools { get; set; }

 

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<HeroSection>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__HeroSect__3214EC07B80A773C");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.HeroMediaUrl).HasMaxLength(500);
            entity.Property(e => e.Tagline).HasMaxLength(200);

            entity.HasOne(d => d.Portfolio).WithMany(p => p.HeroSections)
                .HasForeignKey(d => d.PortfolioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_HeroSections_Portfolios");
        });

        modelBuilder.Entity<PortfolioModel>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Portfoli__3214EC07B380C584");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.CvurlEn)
                .HasMaxLength(500)
                .HasColumnName("CVUrlEn");
            entity.Property(e => e.CvurlEs)
                .HasMaxLength(500)
                .HasColumnName("CVUrlEs");
            entity.Property(e => e.DisplayName).HasMaxLength(100);
            entity.Property(e => e.LogoUrl).HasMaxLength(500);
        });

        modelBuilder.Entity<Profile>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Profiles__3214EC07A562246C");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.ProfileImageUrl).HasMaxLength(500);
            entity.Property(e => e.Role).HasMaxLength(100);

            entity.HasOne(d => d.Portfolio).WithMany(p => p.Profiles)
                .HasForeignKey(d => d.PortfolioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Profiles_Portfolios");
        });

        modelBuilder.Entity<Project>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Projects__3214EC0738A4D6E1");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.Eyebrow).HasMaxLength(100);
            entity.Property(e => e.GithubUrl).HasMaxLength(500);
            entity.Property(e => e.LiveUrl).HasMaxLength(500);
            entity.Property(e => e.Preview).HasMaxLength(500);
            entity.Property(e => e.ShowInPortfolio).HasDefaultValue(true);
            entity.Property(e => e.Status).HasDefaultValue(ProjectStatus.InProgress);
            entity.Property(e => e.Title).HasMaxLength(150);

            entity.HasOne(d => d.Portfolio).WithMany(p => p.Projects)
                .HasForeignKey(d => d.PortfolioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Projects_Portfolios");
        });

        modelBuilder.Entity<ProjectTag>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ProjectT__3214EC07609C74B7");

            entity.Property(e => e.Name).HasMaxLength(100);

            entity.HasOne(d => d.Project).WithMany(p => p.ProjectTags)
                .HasForeignKey(d => d.ProjectId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ProjectTags_Projects");
        });

        modelBuilder.Entity<Skill>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Skills__3214EC072E72C06F");

            entity.Property(e => e.Name).HasMaxLength(100);

            entity.HasOne(d => d.Category).WithMany(p => p.Skills)
                .HasForeignKey(d => d.CategoryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Skills_SkillCategories");
        });

        modelBuilder.Entity<SkillCategory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__SkillCat__3214EC07644723A1");

            entity.Property(e => e.Name).HasMaxLength(50);

            entity.HasOne(d => d.Portfolio).WithMany(p => p.SkillCategories)
                .HasForeignKey(d => d.PortfolioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_SkillCategories_Portfolios");
        });

        modelBuilder.Entity<SocialLink>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__SocialLi__3214EC07D150942A");

            entity.Property(e => e.Icon).HasMaxLength(100);
            entity.Property(e => e.IsActive).HasDefaultValue(true);
            entity.Property(e => e.Platform).HasMaxLength(50);
            entity.Property(e => e.Url).HasMaxLength(500);

            entity.HasOne(d => d.Profile).WithMany(p => p.SocialLinks)
                .HasForeignKey(d => d.ProfileId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_SocialLinks_Profiles");
        });

        modelBuilder.Entity<Tool>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Tools__3214EC074D14A878");

            entity.Property(e => e.Icon).HasMaxLength(100);
            entity.Property(e => e.IsActive).HasDefaultValue(true);
            entity.Property(e => e.Name).HasMaxLength(100);

            entity.HasOne(d => d.Portfolio).WithMany(p => p.Tools)
                .HasForeignKey(d => d.PortfolioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Tools_Portfolios");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
