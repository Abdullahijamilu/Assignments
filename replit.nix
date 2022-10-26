{ pkgs }: {
  deps = [
    pkgs.mk
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}