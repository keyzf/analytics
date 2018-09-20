# statistics.js

轻量的前端统计框架

采集内容:

| 参数 | 获取方式 |
| ------------ | ------------ |
| 域名 | document.domain |
| URL | document.URL |
| 页面标题 | document.title |
| 分辨率 | window.screen.height & width |
| 颜色深度 | window.screen.height & width |
| 分辨率 | window.screen.colorDepth |
| Referrer | document.referrer |
| 浏览客户端 | navigator.userAgent |
| 客户端语言 | navigator.language |

## 使用

直接在页面嵌入script

```markdown
    <script src="main.js"></script>
```

示例：dist/index.html