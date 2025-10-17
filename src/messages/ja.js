// 日本語メッセージ
export const messages = {
  // バージョン情報
  version: '5.0',
  architecture: 'スマートフォルダー化(Smart-Folderization)',
  // ツール説明
  tools: {
    generateFileName: {
      name: 'ファイル名生成',
      description: 'AIネーミング規約に従ってファイル名を生成します'
    },
    validateFileName: {
      name: 'ファイル名検証',
      description: 'ファイル名がAIネーミング規約に準拠しているか検証します'
    },
    explainFileName: {
      name: 'ファイル名説明',
      description: 'ファイル名の各構成要素を説明します'
    },
    getLayerCodes: {
      name: 'レイヤーコード照会',
      description: 'レイヤーコード表を照会します'
    },
    getActionCodes: {
      name: 'アクションコード照会',
      description: 'アクションコード表を照会します'
    },
    getProjectTemplate: {
      name: 'プロジェクトテンプレート',
      description: 'プロジェクトタイプ別ファイル構造テンプレートを生成します'
    },
    batchGenerateFileNames: {
      name: '一括生成',
      description: '複数のファイル名を一度に生成します'
    },
    suggestCorrection: {
      name: '修正提案',
      description: '無効なファイル名に対する修正提案を提供します'
    }
  },

  // パラメータ説明
  parameters: {
    microservice: 'マイクロサービス名（auth、user、paymentなど）',
    sequence: 'シーケンス（001-999、v1-v99、main/alt）または関係性（001-1、001a、001s1）',
    layer: 'アーキテクチャ層',
    domain: 'ドメイン-サブドメイン（user-login、payment-cardなど）',
    action: 'CRUD操作',
    feature: '詳細機能',
    env: '環境',
    ext: 'ファイル拡張子',
    fileName: '検証するファイル名',
    category: 'カテゴリ',
    projectType: 'プロジェクトタイプ',
    scale: 'プロジェクト規模',
    microservices: 'マイクロサービスリスト',
    count: '生成するファイル数'
  },

  // エラーメッセージ
  errors: {
    invalidPattern: 'ファイル名がネーミング規約パターンに従っていません',
    correctFormat: '正しい形式：[microservice]_[sequence]_[layer]_[domain-sub]_[action]_[feature]_[env].[ext]',
    invalidLayer: '無効なレイヤー',
    invalidEnv: '無効な環境',
    unknownTool: '不明なツール',
    unknownResource: '不明なリソース',
    unknownProjectType: '不明なプロジェクトタイプ',
    missingComponents: 'コンポーネントが不足しています。完全な形式'
  },

  // 警告メッセージ
  warnings: {
    customMicroservice: 'マイクロサービスが標準リストにありません。カスタムサービスか確認してください',
    nonStandardAction: '非標準アクション'
  },

  // 説明メッセージ
  descriptions: {
    fileDescription: 'サービスのレイヤーでドメインのタスクを実行するファイル',
    microservice: 'マイクロサービス',
    sequence: 'シーケンス',
    layer: 'アーキテクチャ層',
    domain: 'ドメイン',
    action: '実行操作',
    feature: '詳細機能',
    environment: '実行環境',
    extension: 'ファイル形式',
    purpose: 'このファイルは環境でサービスのレイヤーでに対する操作を実行します'
  },

  // シーケンス説明
  sequences: {
    standard: 'シーケンス番号',
    dependency: '依存関係（順次実行必要）',
    parallel: '並列実行可能な関連ファイル',
    subordinate: '従属関係（親-子）',
    main: 'メインファイル',
    alt: '代替実装',
    version: 'バージョン'
  },

  // 提案メッセージ
  suggestions: {
    fixMicroservice: 'マイクロサービス名を次に修正',
    fixSequence: 'シーケンスを\'001\'形式に修正',
    addMicroservice: 'マイクロサービス名を追加してください（例：auth、user、payment）',
    addSequence: 'シーケンスを追加してください（例：001、v1、main）',
    recommended: '推奨ファイル名'
  },

  // プロジェクトタイプ
  projectTypes: {
    ecommerce: 'Eコマース/マーケットプレイス',
    'social-media': 'ソーシャルメディア',
    fintech: 'フィンテック/バンキング',
    healthcare: 'ヘルスケア/医療',
    education: '教育/Eラーニング',
    streaming: 'ストリーミング/メディア',
    'food-delivery': 'フードデリバリー',
    travel: '旅行/宿泊',
    iot: 'IoT/スマートホーム',
    gaming: 'ゲーミング/eスポーツ',
    blockchain: 'ブロックチェーン/Web3'
  },

  // コンポーネント説明
  components: {
    microservice: 'マイクロサービス識別子',
    sequence: 'ファイルシーケンスまたは関係性表現',
    sequential: 'シーケンシャル番号（001-999）',
    version: 'バージョン番号',
    variant: 'メイン/代替実装',
    dependency: '依存関係（順次実行）',
    parallel: '並列実行可能',
    subordinate: '従属関係（親-子）',
    layer: 'アーキテクチャ層',
    domain: 'ドメイン-サブドメイン',
    action: '実行動作',
    feature: '詳細機能',
    environment: '実行環境',
    extension: 'ファイル拡張子'
  },

  // ベストプラクティス
  bestPractices: [
    'マイクロサービス名は明確かつ簡潔に',
    'シーケンス番号は001から順番に付与',
    '関連ファイルにはレベル1関係性表現を使用',
    'ドメイン-サブドメインはkebab-caseで表現',
    '環境タグはデプロイ環境と一致させる',
    'ファイル名の長さは80文字以内に制限',
    '略語より明確な単語を推奨'
  ],

  // アンチパターン
  antiPatterns: [
    'キャメルケースやパスカルケースの使用禁止',
    '特殊文字の使用禁止（アンダースコア、ハイフンを除く）',
    '不明確な略語の使用禁止',
    '重複情報の含有禁止',
    '環境情報の省略禁止'
  ],

  // レイヤー説明
  layers: {
    controller: 'HTTPリクエスト処理、ルーティング',
    service: 'ビジネスロジック実装',
    repository: 'データアクセス層',
    model: 'データ構造定義',
    dto: 'データ転送オブジェクト',
    middleware: 'リクエスト/レスポンス中間処理',
    validator: '入力検証',
    component: 'UIコンポーネント',
    page: 'ページコンポーネント',
    hook: 'React/Vueフック',
    store: '状態管理',
    util: 'ユーティリティ関数',
    style: 'スタイルシート',
    migration: 'DBマイグレーション',
    seed: 'シードデータ',
    schema: 'DBスキーマ',
    config: '設定ファイル',
    docker: 'Docker設定',
    k8s: 'K8sマニフェスト',
    terraform: 'IaCコード'
  },

  // アクション説明
  actions: {
    create: '新規リソース作成',
    read: 'データ読取',
    update: '既存データ更新',
    delete: 'リソース削除',
    validate: '妥当性検証',
    transform: 'データ変換',
    calculate: '計算実行',
    process: 'データ処理',
    analyze: 'データ分析',
    send: 'データ送信',
    fetch: '外部データ取得',
    sync: '同期',
    publish: 'イベント発行',
    subscribe: 'イベント購読'
  },

  // サーバーメッセージ
  server: {
    started: 'AI Naming Standard MCPサーバー v5.0 (スマートフォルダー化) が正常に起動しました',
    error: 'エラー'
  },

  // v5専用メッセージ
  v5: {
    projectCreated: '7つの標準フォルダでプロジェクト構造を作成しました',
    folderSuggested: 'ファイル分析に基づいてフォルダを提案しました',
    migrationPlan: 'v4からv5への移行計画を作成しました（テスト実行）',
    migrationExecuted: 'v5移行が正常に実行されました',
    smartFolderization: 'スマートフォルダー化: 最小フォルダ、ファイル名に最大コンテキスト'
  },

  // フォルダ説明
  folders: {
    '00_DOCS': 'ドキュメント（AI読み取り専用）',
    '01_CONFIG': '設定（AI修正禁止）',
    '02_STATIC': '静的リソース（AI読み取り/追加）',
    '03_ACTIVE': 'アクティブコード（AI完全アクセス）',
    '04_TEST': 'テスト（AI作成/修正）',
    '05_BUILD': 'ビルド出力（AI作成専用）',
    '06_LOGS': 'ログ（AI書き込み専用）'
  },

  // AI権限
  aiPermissions: {
    'read-only': '読み取りのみ可能',
    'no-modify': '修正不可',
    'read-add': '読み取りおよび追加可能',
    'full-access': 'すべての操作権限',
    'create-modify': '作成および修正可能',
    'create-only': '作成のみ可能',
    'write-only': '書き込み/追加のみ可能'
  }
};

export default messages;