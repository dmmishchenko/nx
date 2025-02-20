import { NameAndDirectoryFormat } from '@nx/devkit/src/generators/artifact-name-and-directory-utils';

export interface Schema {
  name: string;
  directory?: string;
  nameAndDirectoryFormat?: NameAndDirectoryFormat;
  skipTests?: boolean;
  inlineScam?: boolean;
  export?: boolean;
  /**
   * @deprecated Provide the `directory` option instead and use the `as-provided` format. It will be removed in Nx v18.
   */
  flat?: boolean;
  /**
   * @deprecated Provide the `directory` option instead. It will be removed in Nx v18.
   */
  path?: string;
  /**
   * @deprecated Provide the `directory` option instead. The project will be determined from the directory provided. It will be removed in Nx v18.
   */
  project?: string;
}

export interface NormalizedSchema extends Schema {
  directory: string;
  export: boolean;
  fileName: string;
  filePath: string;
  inlineScam: boolean;
  projectName: string;
  symbolName: string;
}
