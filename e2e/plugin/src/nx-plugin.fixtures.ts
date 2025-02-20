export const ASYNC_GENERATOR_EXECUTOR_CONTENTS = `import { ExecutorContext } from '@nx/devkit';

async function* asyncGenerator(
) {
  for (let i = 5; i < 10; i++) {
    yield new Promise((res) => setTimeout(() => res({ success: true }), 5));
  }
  yield { success: true };
}

export default async function* execute(
  options: unknown,
  context: ExecutorContext
) {
  for (let i = 5; i < 10; i++) {
    yield new Promise((res) => setTimeout(() => res({ success: true }), 5));
  }
  yield* asyncGenerator();
}
`;

export const NX_PLUGIN_V2_CONTENTS = `import { basename, dirname } from "path";
import { CreateNodes } from "@nx/devkit";

type PluginOptions = {
    inferredTags: string[]
}

export const createNodes: CreateNodes<PluginOptions> = [
    "**/my-project-file",
    (f, options, ctx) => {
        // f = path/to/my/file/my-project-file
        const root = dirname(f);
        // root = path/to/my/file
        const name = basename(root);
        // name = file

        return {
            projects: {
                [name]: {
                    root,
                    targets: {
                        build: {
                            executor: "nx:run-commands",
                            options: {
                                command: "echo 'custom registered target'",
                            },
                        },
                    },
                    tags: options.inferredTags
                },
            },
        };
    },
];
`;
