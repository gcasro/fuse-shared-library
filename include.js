const os = require("os");

const arch = os.arch();
const platform = os.platform() + (arch === "arm" ? "-arm" : "");

switch (platform) {
    case "linux":
        require("@gcas/fuse-shared-library-linux/include");
        break;
    case "darwin":
        require("@gcas/fuse-shared-library-darwin/include");
        break;
    case "linux-arm":
        require("@gcas/fuse-shared-library-linux-arm/include");
        break;
    case "win32":
        require("@gcas/fuse-shared-library-win32/include");
        break;
    default:
        throw new Error(
            `fuse-shared-library is not currently supported on: ${platform}`
        );
}
