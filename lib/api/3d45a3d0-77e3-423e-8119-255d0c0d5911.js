module.exports = {
  "query_id": "3d45a3d0-77e3-423e-8119-255d0c0d5911",
  "db_id": "9425f5b0-79b0-4539-9543-7f97e473deeb",
  "route": "/language",
  "method": "GET",
  "query_json": {
    "schema": "public",
    "table": "language",
    "method": "select",
    "table_alias": "language",
    "where": {
      "condition": "AND",
      "id": "root",
      "rules": [],
      "not": false
    },
    "orderby_dynamic": false,
    "orderby_dynamic_columns": [],
    "limit_dynamic": false,
    "offset_dynamic": false,
    "offset": 0,
    "limit": 100,
    "columns": [
      {
        "columnName": "public.language.language_id",
        "alias": "language_id",
        "label": "language_id"
      },
      {
        "columnName": "public.language.last_update",
        "alias": "last_update",
        "label": "last_update"
      },
      {
        "columnName": "public.language.name",
        "alias": "name",
        "label": "name"
      }
    ],
    "joins": [],
    "orderby": [],
    "condition_count": 0
  },
  "sqlmethod": "select",
  "querypaths": [],
  "auth_required": false,
  "base": "15575188"
}