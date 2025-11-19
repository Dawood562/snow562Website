export enum Framework {
  AWS = "AWS",
  AZURE = "Microsoft Azure",
  BAKKESMOD = "BakkesMod SDK",
  CODESKULPTOR = "CodeSkulptor",
  CPP = "C++",
  CSS = "CSS",
  CSHARP = "C#",
  DISCORDPY = "discord.py",
  DJANGO = "Django",
  DOTNET = ".NET",
  FASTAPI = "FastAPI",
  FLASK = "Flask",
  GCP = "Google Cloud Platform",
  GOLANG = "GoLang",
  HTML = "HTML",
  JAVASCRIPT = "JavaScript",
  LIBRESPRITE = "LibreSprite",
  MONGODB = "MongoDB",
  NEXTJS = "Next.js",
  POSTGRESQL = "PostgreSQL",
  PYTHON = "Python",
  PYTORCH = "PyTorch",
  REACT = "React",
  SQLITE = "SQLite",
  TENSORFLOW = "TensorFlow",
  TYPESCRIPT = "TypeScript",
  TBD = "TBD",
}

export const STATUS_INFO: Record<Framework, { label: string; icon: string; colour: string }> = {
    [Framework.CSS]: {
        label: "CSS", 
        icon: "https://assets.snow562.com/images/logos/frameworks/css.png", 
        colour: "#2162AF", 
    },
    [Framework.HTML]: {
        label: "HTML", 
        icon: "https://assets.snow562.com/images/logos/frameworks/html.png", 
        colour: "#F15A2B", 
    },
    [Framework.PYTHON]: {
        label: "Python", 
        icon: "https://assets.snow562.com/images/logos/frameworks/python.png", 
        colour: "#FFD343", 
    },
    [Framework.JAVASCRIPT]: {
        label: "JavaScript", 
        icon: "https://assets.snow562.com/images/logos/frameworks/javascript.png", 
        colour: "#FCB040", 
    },
    [Framework.CSHARP]: {
        label: "C#", 
        icon: "https://assets.snow562.com/images/logos/frameworks/csharp.png", 
        colour: "#68217A", 
    },
    [Framework.CPP]: {
        label: "C++", 
        icon: "https://assets.snow562.com/images/logos/frameworks/cpp.png", 
        colour: "#004482", 
    },
    [Framework.TYPESCRIPT]: {
        label: "TypeScript", 
        icon: "https://assets.snow562.com/images/logos/frameworks/typescript.png", 
        colour: "#3178C6", 
    },
    [Framework.REACT]: {
        label: "React", 
        icon: "https://assets.snow562.com/images/logos/frameworks/react.png", 
        colour: "#61DAFB", 
    },
    [Framework.NEXTJS]: {
        label: "Next.js", 
        icon: "https://assets.snow562.com/images/logos/frameworks/nextjs.png", 
        colour: "#000000", 
    },
    [Framework.DISCORDPY]: {
        label: "discord.py", 
        icon: "https://assets.snow562.com/images/logos/frameworks/discordpy.png", 
        colour: "#386D9F", 
    },
    [Framework.DOTNET]: {
        label: ".NET", 
        icon: "https://assets.snow562.com/images/logos/frameworks/dotnet.png", 
        colour: "#512BD4", 
    },
    [Framework.FLASK]: {
        label: "Flask", 
        icon: "https://assets.snow562.com/images/logos/frameworks/flask.png", 
        colour: "#B3B3B3", 
    },
    [Framework.GOLANG]: {
        label: "GoLang", 
        icon: "https://assets.snow562.com/images/logos/frameworks/golang.png", 
        colour: "#5AC9E2", 
    },
    [Framework.BAKKESMOD]: {
        label: "BakkesMod SDK", 
        icon: "https://assets.snow562.com/images/logos/frameworks/bakkesmod.png", 
        colour: "#F08B20", 
    },
    [Framework.AZURE]: {
        label: "Microsoft Azure", 
        icon: "https://assets.snow562.com/images/logos/frameworks/azure.png", 
        colour: "#0089D6", 
    },
    [Framework.AWS]: {
        label: "AWS", 
        icon: "https://assets.snow562.com/images/logos/frameworks/aws.png", 
        colour: "#FF9900", 
    },
    [Framework.GCP]: {
        label: "Google Cloud", 
        icon: "https://assets.snow562.com/images/logos/frameworks/gcp.png", 
        colour: "#EA4335", 
    },
    [Framework.DJANGO]: {
        label: "Django", 
        icon: "https://assets.snow562.com/images/logos/frameworks/django.png", 
        colour: "#2BA977", 
    },
    [Framework.FASTAPI]: {
        label: "FastAPI", 
        icon: "https://assets.snow562.com/images/logos/frameworks/fastapi.png", 
        colour: "#009688", 
    },
    [Framework.TENSORFLOW]: {
        label: "TensorFlow", 
        icon: "https://assets.snow562.com/images/logos/frameworks/tensorflow.png", 
        colour: "#ED8E24", 
    },
    [Framework.PYTORCH]: {
        label: "PyTorch", 
        icon: "https://assets.snow562.com/images/logos/frameworks/pytorch.png", 
        colour: "#EE4C2C", 
    },
    [Framework.POSTGRESQL]: {
        label: "PostgreSQL", 
        icon: "https://assets.snow562.com/images/logos/frameworks/postgresql.png", 
        colour: "#336791", 
    },
    [Framework.MONGODB]: {
        label: "MongoDB", 
        icon: "https://assets.snow562.com/images/logos/frameworks/mongodb.png", 
        colour: "#12924F", 
    },
    [Framework.SQLITE]: {
        label: "SQLite", 
        icon: "https://assets.snow562.com/images/logos/frameworks/sqlite.png", 
        colour: "#0F80CC", 
    },
    [Framework.CODESKULPTOR]: {
        label: "CodeSkulptor", 
        icon: "https://assets.snow562.com/images/emoji/questionmark.png", 
        colour: "#006295", 
    },
    [Framework.LIBRESPRITE]: {
        label: "LibreSprite", 
        icon: "https://assets.snow562.com/images/logos/frameworks/libresprite.png", 
        colour: "#EEEEEE", 
    },
    [Framework.TBD]: {
        label: "TBD", 
        icon: "https://assets.snow562.com/images/emoji/questionmark.png", 
        colour: "#000000", 
    }
};