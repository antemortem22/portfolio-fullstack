SET XACT_ABORT ON;
GO

BEGIN TRANSACTION;

DECLARE @Now DATETIME2 = SYSUTCDATETIME();
DECLARE @PortfolioId INT;
DECLARE @ProfileId INT;
DECLARE @ProjectIdPortfolio INT;
DECLARE @ProjectIdTaskFlow INT;
DECLARE @BackendCategoryId INT;
DECLARE @FrontendCategoryId INT;
DECLARE @ToolsCategoryId INT;

DELETE FROM ProjectTags;
DELETE FROM SocialLinks;
DELETE FROM Skills;
DELETE FROM Projects;
DELETE FROM Profiles;
DELETE FROM HeroSections;
DELETE FROM SkillCategories;
DELETE FROM Tools;
DELETE FROM Portfolios;

INSERT INTO Portfolios
(
    OwnerUserId,
    LogoUrl,
    DisplayName,
    CVUrlEs,
    CVUrlEn,
    CreatedAt,
    UpdatedAt
)
VALUES
(
    '7A4A8D5F-7A84-4D0A-9B83-DAA9E4B9F112',
    'https://cdn.example.com/portfolio/logo-agostina.svg',
    'Agostina Portfolio',
    'https://cdn.example.com/portfolio/agostina-cv-es.pdf',
    'https://cdn.example.com/portfolio/agostina-cv-en.pdf',
    @Now,
    NULL
);

SET @PortfolioId = SCOPE_IDENTITY();

INSERT INTO HeroSections
(
    PortfolioId,
    Tagline,
    DescriptionEs,
    DescriptionEn,
    HeroMediaUrl,
    CreatedAt,
    UpdatedAt
)
VALUES
(
    @PortfolioId,
    'Full Stack Developer building thoughtful digital products',
    'Desarrollo experiencias web modernas, priorizando rendimiento, claridad y una experiencia de usuario cuidada.',
    'I build modern web experiences with a focus on performance, clarity, and polished user experience.',
    'https://cdn.example.com/portfolio/hero-cover.png',
    @Now,
    NULL
);

INSERT INTO Profiles
(
    PortfolioId,
    AboutEs,
    AboutEn,
    Role,
    ProfileImageUrl,
    CreatedAt,
    UpdatedAt
)
VALUES
(
    @PortfolioId,
    'Soy desarrolladora full stack y disfruto crear productos claros, escalables y mantenibles. Me gusta trabajar tanto en interfaces cuidadas como en APIs limpias y bien modeladas.',
    'I am a full stack developer who enjoys building clear, scalable, and maintainable products. I like working on both polished interfaces and clean, well-modeled APIs.',
    'Full Stack Developer',
    'https://cdn.example.com/portfolio/profile-agostina.jpg',
    @Now,
    NULL
);

SET @ProfileId = SCOPE_IDENTITY();

INSERT INTO SocialLinks
(
    ProfileId,
    Platform,
    Url,
    Icon,
    DisplayOrder,
    IsActive
)
VALUES
(@ProfileId, 'GitHub', 'https://github.com/agostina-dev', 'github', 1, 1),
(@ProfileId, 'LinkedIn', 'https://linkedin.com/in/agostina-dev', 'linkedin', 2, 1),
(@ProfileId, 'Email', 'mailto:agostina@example.com', 'mail', 3, 1),
(@ProfileId, 'Instagram', 'https://instagram.com/agostina.dev', 'instagram', 4, 0);

INSERT INTO Projects
(
    PortfolioId,
    Title,
    Eyebrow,
    DescriptionEs,
    DescriptionEn,
    GithubUrl,
    LiveUrl,
    Preview,
    ShowInPortfolio,
    DisplayOrder,
    CreatedAt,
    UpdatedAt,
    Status
)
VALUES
(
    @PortfolioId,
    'Portfolio Fullstack',
    'Personal Brand',
    'Aplicacion personal para mostrar proyectos, skills y experiencia con una API en .NET y un frontend moderno.',
    'Personal application to showcase projects, skills, and experience with a .NET API and a modern frontend.',
    'https://github.com/agostina-dev/portfolio-fullstack',
    'https://portfolio.agostina.dev',
    'https://cdn.example.com/portfolio/projects/portfolio-fullstack.png',
    1,
    1,
    @Now,
    NULL,
    1
),
(
    @PortfolioId,
    'TaskFlow',
    'Productivity App',
    'Gestor de tareas colaborativo con autenticacion, tableros, etiquetas y seguimiento de estados.',
    'Collaborative task manager with authentication, boards, tags, and status tracking.',
    'https://github.com/agostina-dev/taskflow',
    'https://taskflow.agostina.dev',
    'https://cdn.example.com/portfolio/projects/taskflow.png',
    1,
    2,
    @Now,
    NULL,
    2
),
(
    @PortfolioId,
    'Inventory Admin',
    'Backoffice',
    'Panel administrativo para gestion interna de inventario y catalogo de productos.',
    'Administrative dashboard for internal inventory and product catalog management.',
    'https://github.com/agostina-dev/inventory-admin',
    NULL,
    'https://cdn.example.com/portfolio/projects/inventory-admin.png',
    0,
    3,
    @Now,
    NULL,
    3
);

SELECT @ProjectIdPortfolio = Id
FROM Projects
WHERE PortfolioId = @PortfolioId
  AND Title = 'Portfolio Fullstack';

SELECT @ProjectIdTaskFlow = Id
FROM Projects
WHERE PortfolioId = @PortfolioId
  AND Title = 'TaskFlow';

INSERT INTO ProjectTags
(
    ProjectId,
    Name
)
VALUES
(@ProjectIdPortfolio, 'ASP.NET Core'),
(@ProjectIdPortfolio, 'React'),
(@ProjectIdPortfolio, 'SQL Server'),
(@ProjectIdPortfolio, 'REST API'),
(@ProjectIdTaskFlow, 'TypeScript'),
(@ProjectIdTaskFlow, 'Authentication'),
(@ProjectIdTaskFlow, 'Entity Framework'),
(@ProjectIdTaskFlow, 'UX/UI');

INSERT INTO SkillCategories
(
    PortfolioId,
    Name,
    DisplayOrder
)
VALUES
(@PortfolioId, 'Backend', 1),
(@PortfolioId, 'Frontend', 2),
(@PortfolioId, 'Tools', 3);

SELECT @BackendCategoryId = Id
FROM SkillCategories
WHERE PortfolioId = @PortfolioId
  AND Name = 'Backend';

SELECT @FrontendCategoryId = Id
FROM SkillCategories
WHERE PortfolioId = @PortfolioId
  AND Name = 'Frontend';

SELECT @ToolsCategoryId = Id
FROM SkillCategories
WHERE PortfolioId = @PortfolioId
  AND Name = 'Tools';

INSERT INTO Skills
(
    CategoryId,
    Name,
    Percentage,
    DisplayOrder
)
VALUES
(@BackendCategoryId, 'C#', 90, 1),
(@BackendCategoryId, '.NET', 88, 2),
(@BackendCategoryId, 'Entity Framework Core', 84, 3),
(@BackendCategoryId, 'SQL Server', 80, 4),
(@FrontendCategoryId, 'React', 85, 1),
(@FrontendCategoryId, 'TypeScript', 82, 2),
(@FrontendCategoryId, 'HTML/CSS', 87, 3),
(@FrontendCategoryId, 'Tailwind CSS', 75, 4),
(@ToolsCategoryId, 'Git', 86, 1),
(@ToolsCategoryId, 'Postman', 78, 2),
(@ToolsCategoryId, 'Figma', 70, 3),
(@ToolsCategoryId, 'Azure DevOps', 68, 4);

INSERT INTO Tools
(
    PortfolioId,
    Name,
    Icon,
    DisplayOrder,
    IsActive
)
VALUES
(@PortfolioId, 'Visual Studio', 'visual-studio', 1, 1),
(@PortfolioId, 'VS Code', 'vscode', 2, 1),
(@PortfolioId, 'SQL Server', 'database', 3, 1),
(@PortfolioId, 'Postman', 'postman', 4, 1),
(@PortfolioId, 'Docker', 'docker', 5, 1),
(@PortfolioId, 'Figma', 'figma', 6, 1);

COMMIT TRANSACTION;
GO
