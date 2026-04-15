# Office Ai 助手

Office Ai 助手 是一个适用于 Microsoft Excel、Word 和 PowerPoint 的 Office 加载项。

发布地址：

`https://rebecca554owen.github.io/claude-for-excel/`

## 项目结构

- `index.html`：加载项页面入口
- `m-addin/assets/`：前端静态资源与打包产物
- `manifest.xml`：用于 Office 侧载的加载项清单

## 部署

推送到 `main` 分支后，GitHub Actions 会将当前站点内容发布到 GitHub Pages。

## Office 侧载

### 共享文件夹侧载

1. 右键本仓库目录 → 属性 → 共享，获取网络路径（如 `\\HOSTNAME\claude-for-excel`）
2. 在 Office 中：文件 → 选项 → 信任中心 → 信任中心设置 → 受信任的加载项目录
3. 填入网络路径，勾选“在菜单中显示”，点击添加
4. 重启 Office，插入 → 加载项 → 共享文件夹 → 选择 **Office Ai 助手**
